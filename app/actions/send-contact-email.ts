"use server";

import { Resend } from "resend";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();

  // Honeypot field for bots.
  if (company) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !fromEmail || !toEmail) {
    return {
      status: "error",
      message:
        "Email is not configured yet. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_EMAIL.",
    };
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { status: "success", message: "Thanks! Your message has been sent." };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your email. Please try again.",
    };
  }
}
