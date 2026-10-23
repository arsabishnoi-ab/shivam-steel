"use server";

import { headers } from "next/headers";
import { saveEnquiryLocally, sendEnquiryEmail } from "@/lib/enquiries";
import { enquirySchema, fieldErrorsFromZod, readEnquiryForm } from "@/lib/validation";

export type ContactState = {
  status: "idle" | "success" | "error";
  mode?: "email" | "development" | "unavailable" | "validation" | "spam" | "rate";
  message?: string;
  fieldErrors?: Partial<Record<string, string>>;
};

const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function submitEnquiry(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = readEnquiryForm(formData);
  if (raw.companyWebsite) {
    return {
      status: "error",
      mode: "spam",
      message: "We could not accept this submission. Please call or WhatsApp instead.",
    };
  }

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      mode: "validation",
      message: "Please correct the highlighted fields.",
      fieldErrors: fieldErrorsFromZod(parsed.error),
    };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "local";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      mode: "rate",
      message: "Please wait a few minutes before sending another enquiry.",
    };
  }

  const provider = process.env.CONTACT_PROVIDER?.trim().toLowerCase();

  if (provider === "resend") {
    try {
      await sendEnquiryEmail(parsed.data);
      return {
        status: "success",
        mode: "email",
        message: "Your enquiry has been sent. We will contact you using your preferred method.",
      };
  } catch {
    console.error("Enquiry email failed.");
      return {
        status: "error",
        mode: "unavailable",
        message: "The enquiry could not be sent by email. Please call or WhatsApp us.",
      };
    }
  }

  if (process.env.NODE_ENV !== "production") {
    await saveEnquiryLocally(parsed.data);
    return {
      status: "success",
      mode: "development",
      message:
        "Development mode: this enquiry was saved on the server. Email has not been sent, because delivery is not configured.",
    };
  }

  return {
    status: "error",
    mode: "unavailable",
    message:
      "Online enquiries are not active yet. Please call or WhatsApp us, and we will take the details directly.",
  };
}
