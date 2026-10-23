import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { EnquiryInput } from "@/lib/validation";

const filePath = path.join(process.cwd(), ".data", "enquiries.json");

export async function saveEnquiryLocally(enquiry: EnquiryInput) {
  await mkdir(path.dirname(filePath), { recursive: true });
  let current: unknown[] = [];
  try {
    const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
    if (Array.isArray(parsed)) current = parsed;
  } catch {
    current = [];
  }
  current.push({
    ...enquiry,
    companyWebsite: undefined,
    savedAt: new Date().toISOString(),
  });
  await writeFile(filePath, JSON.stringify(current, null, 2), "utf8");
}

function enquiryText(enquiry: EnquiryInput) {
  return [
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email || "Not provided"}`,
    `Service: ${enquiry.service}`,
    `Location: ${enquiry.location}`,
    `Preferred contact: ${enquiry.contactMethod}`,
    "",
    enquiry.description,
  ].join("\n");
}

export async function sendEnquiryEmail(enquiry: EnquiryInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    throw new Error("Resend is not fully configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: enquiry.email || undefined,
      subject: `Railing enquiry from ${enquiry.name}`,
      text: enquiryText(enquiry),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider returned ${response.status}.`);
  }
}
