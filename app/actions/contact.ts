
"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(25),
  city: z.string().trim().max(100).optional(),
  subject: z.preprocess(
    (value) => value === "" ? undefined : value,
    z.enum(["general", "services", "appointments", "branches", "other"]).optional(),
  ),
  message: z.string().trim().min(10, "Please provide a little more detail.").max(5000),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const initialContactState: ContactFormState = {
  success: false,
  message: "",
};

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Simple honeypot for automated submissions.
  if (String(formData.get("website") ?? "").trim()) {
    return {
      success: true,
      message: "Your enquiry has been submitted successfully.",
    };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    city: formData.get("city") || undefined,
    subject: formData.get("subject") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please review the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form email environment variables are missing.");

    return {
      success: false,
      message: "We couldn't submit your enquiry right now. Please contact the hospital directly.",
    };
  }

  const resend = new Resend(apiKey);

  const subjectLabels: Record<string, string> = {
    general: "General enquiry",
    services: "Services enquiry",
    appointments: "Appointment enquiry",
    branches: "Branch enquiry",
    other: "Other enquiry",
  };

  const enquirySubject = parsed.data.subject
    ? subjectLabels[parsed.data.subject]
    : "General enquiry";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: parsed.data.email,
    subject: `Website enquiry: ${enquirySubject}`,
    text: `
New website enquiry

Name: ${parsed.data.name}
Email: ${parsed.data.email}
Phone: ${parsed.data.phone}
City: ${parsed.data.city || "Not provided"}
Enquiry type: ${enquirySubject}

Message:
${parsed.data.message}
    `.trim(),
  });

  if (error) {
    console.error("Contact enquiry email failed:", error);

    return {
      success: false,
      message: "Your enquiry could not be sent. Please try again or contact the hospital directly.",
    };
  }

  return {
    success: true,
    message: "Thank you. Your enquiry has been submitted successfully.",
  };
}
