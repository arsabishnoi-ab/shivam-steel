import { z } from "zod";
import { enquiryServiceOptions } from "@/data/services";

export const contactMethods = ["Phone", "WhatsApp", "Email"] as const;

function phoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export const enquirySchema = z
  .object({
    name: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
    phone: z.string().trim().min(1, "Enter a phone number."),
    email: z.string().trim().max(120).optional().or(z.literal("")),
    service: z.enum(enquiryServiceOptions, { message: "Select a service." }),
    location: z
      .string()
      .trim()
      .min(2, "Enter the project location.")
      .max(120, "Location is too long."),
    description: z
      .string()
      .trim()
      .min(10, "Describe the railing work in a sentence or two.")
      .max(2000, "Please keep the description under 2000 characters."),
    contactMethod: z.enum(contactMethods, { message: "Choose how we should reply." }),
    companyWebsite: z.string().optional().or(z.literal("")),
  })
  .superRefine((value, context) => {
    const digits = phoneDigits(value.phone);
    if (!/^[6-9]\d{9}$/.test(digits)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: "Enter a valid 10-digit mobile number.",
      });
    }
    if (value.email && !z.string().email().safeParse(value.email).success) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message: "Enter a valid email address, or leave it blank.",
      });
    }
    if (value.contactMethod === "Email" && !value.email) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message: "Enter an email address if you prefer a reply by email.",
      });
    }
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;

export function fieldErrorsFromZod(error: z.ZodError) {
  const fieldErrors: Partial<Record<string, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
  }
  return fieldErrors;
}

export function readEnquiryForm(formData: FormData) {
  return {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    service: String(formData.get("service") ?? ""),
    location: String(formData.get("location") ?? ""),
    description: String(formData.get("description") ?? ""),
    contactMethod: String(formData.get("contactMethod") ?? ""),
    companyWebsite: String(formData.get("companyWebsite") ?? ""),
  };
}
