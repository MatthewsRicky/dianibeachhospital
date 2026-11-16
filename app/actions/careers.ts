"use server";

import { Resend } from "resend";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const careerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(25),
  position: z
    .string()
    .trim()
    .min(2, "Please enter the position you're applying for.")
    .max(150),
  message: z.string().trim().max(5000).optional(),
  cv: z
    .custom<File>(
      (value) =>
        typeof File !== "undefined" && value instanceof File && value.size > 0,
      "Please attach your CV.",
    )
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Your CV must be no larger than 5 MB.",
    )
    .refine(
      (file) => /\.(pdf|doc|docx)$/i.test(file.name),
      "Your CV must be a PDF, DOC, or DOCX file.",
    ),
});

export type CareerFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitCareerApplication(
  _previousState: CareerFormState,
  formData: FormData,
): Promise<CareerFormState> {
  // Simple honeypot for automated submissions.
  if (String(formData.get("website") ?? "").trim()) {
    return {
      success: true,
      message: "Your application has been submitted successfully.",
    };
  }

  const parsed = careerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    position: formData.get("position"),
    message: formData.get("message") || undefined,
    cv: formData.get("cv"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please review the application details and attached CV.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { cv, ...applicant } = parsed.data;

  // Check the actual file signature, not just its extension.
  const header = new Uint8Array(await cv.slice(0, 8).arrayBuffer());

  const isPdf =
    header[0] === 0x25 &&
    header[1] === 0x50 &&
    header[2] === 0x44 &&
    header[3] === 0x46;

  const isDoc =
    header[0] === 0xd0 &&
    header[1] === 0xcf &&
    header[2] === 0x11 &&
    header[3] === 0xe0 &&
    header[4] === 0xa1 &&
    header[5] === 0xb1 &&
    header[6] === 0x1a &&
    header[7] === 0xe1;

  const isDocx =
    header[0] === 0x50 &&
    header[1] === 0x4b &&
    header[2] === 0x03 &&
    header[3] === 0x04;

  const extension = cv.name.split(".").pop()?.toLowerCase();

  const validSignature =
    (extension === "pdf" && isPdf) ||
    (extension === "doc" && isDoc) ||
    (extension === "docx" && isDocx);

  if (!validSignature) {
    return {
      success: false,
      message:
        "The attached file doesn't appear to be a valid PDF, DOC, or DOCX document.",
      errors: {
        cv: ["Please attach a valid document in PDF, DOC, or DOCX format."],
      },
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CAREERS_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Career form email environment variables are missing.");

    return {
      success: false,
      message:
        "We couldn't submit your application right now. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);

  const safeFilename = cv.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 100);
  const fileContent = Buffer.from(await cv.arrayBuffer()).toString("base64");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: applicant.email,
    subject: `Career application: ${applicant.position}`,
    text: `
New career application received

Applicant: ${applicant.name}
Email: ${applicant.email}
Phone: ${applicant.phone}
Position: ${applicant.position}

Additional information:
${applicant.message || "None provided"}

CV attached: ${safeFilename}
    `.trim(),
    attachments: [
      {
        filename: safeFilename,
        content: fileContent,
      },
    ],
  });

  if (error) {
    console.error("Career application email failed:", error);

    return {
      success: false,
      message: "Your application could not be sent. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Thank you. Your application has been submitted successfully.",
  };
}
