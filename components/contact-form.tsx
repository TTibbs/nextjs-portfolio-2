"use client";

import { useActionState } from "react";
import { useEffect, useState } from "react";

import { sendContactEmail } from "@/app/actions/send-contact-email";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { HoverButton } from "./ui/hover-button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useActionState(
    sendContactEmail,
    initialContactFormState,
  );
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.status === "idle") {
      setShowMessage(false);
      return;
    }

    setShowMessage(true);
    const timeoutId = window.setTimeout(() => setShowMessage(false), 5000);

    return () => window.clearTimeout(timeoutId);
  }, [state.status, state.message]);

  const { pending } = useFormStatus();

  return (
    <form
      action={formAction}
      className="mx-auto mt-8 w-full max-w-2xl text-left md:mt-10"
    >
      <FieldGroup className="gap-4">
        <input
          type="text"
          name="company"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          aria-hidden
        />

        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <FieldContent>
            <input
              id="name"
              name="name"
              required
              className="h-10 w-full border border-[#2a2a2a] bg-transparent px-3 text-sm text-[#f0f0f0] outline-none transition-colors focus:border-[#00ff88]"
              placeholder="Your name"
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldContent>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="h-10 w-full border border-[#2a2a2a] bg-transparent px-3 text-sm text-[#f0f0f0] outline-none transition-colors focus:border-[#00ff88]"
              placeholder="you@example.com"
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <FieldContent>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-y border border-[#2a2a2a] bg-transparent px-3 py-2 text-sm text-[#f0f0f0] outline-none transition-colors focus:border-[#00ff88]"
              placeholder="Tell me about your project."
            />
            <FieldDescription className="text-[#666]">
              I usually reply within 24 hours.
            </FieldDescription>
          </FieldContent>
        </Field>

        <HoverButton type="submit" disabled={pending} className="ml-auto w-fit">
          {pending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Send message →"
          )}
        </HoverButton>
      </FieldGroup>

      {showMessage && state.status === "error" && (
        <FieldError className="mt-3 text-[#ff3366]">{state.message}</FieldError>
      )}
      {showMessage && state.status === "success" && (
        <p className="mt-3 text-xs tracking-[0.08em] text-[#00ff88]">
          {state.message}
        </p>
      )}
    </form>
  );
}
