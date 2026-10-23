"use client";

import { useActionState, useState } from "react";
import { submitEnquiry, type ContactState } from "@/actions/contact";
import { enquiryServiceOptions } from "@/data/services";
import { contactMethods, enquirySchema, fieldErrorsFromZod } from "@/lib/validation";

const initialState: ContactState = { status: "idle" };
const inputClass = "w-full border border-line bg-paper px-3 py-3 text-base text-ink";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, action, pending] = useActionState(submitEnquiry, initialState);
  const [clientErrors, setClientErrors] = useState<Partial<Record<string, string>>>({});
  const errors = { ...clientErrors, ...(state.status === "error" ? state.fieldErrors : {}) };
  const selected = enquiryServiceOptions.includes(defaultService as (typeof enquiryServiceOptions)[number])
    ? defaultService
    : "";

  return (
    <form
      action={action}
      noValidate
      className="border border-line bg-paper p-5 sm:p-8"
      onSubmit={(event) => {
        const data = new FormData(event.currentTarget);
        const parsed = enquirySchema.safeParse({
          name: String(data.get("name") ?? ""),
          phone: String(data.get("phone") ?? ""),
          email: String(data.get("email") ?? ""),
          service: String(data.get("service") ?? ""),
          location: String(data.get("location") ?? ""),
          description: String(data.get("description") ?? ""),
          contactMethod: String(data.get("contactMethod") ?? ""),
          companyWebsite: String(data.get("companyWebsite") ?? ""),
        });
        if (!parsed.success) {
          event.preventDefault();
          setClientErrors(fieldErrorsFromZod(parsed.error));
        } else {
          setClientErrors({});
        }
      }}
    >
      <h2 className="font-serif text-3xl text-charcoal">Quotation form</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Tell us about the railing. Required fields are marked.
      </p>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-charcoal">
            Full name <span className="text-gold-deep">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          {errors.name ? <ErrorText id="name-error" message={errors.name} /> : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-charcoal">
            Phone number <span className="text-gold-deep">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
          />
          {errors.phone ? <ErrorText id="phone-error" message={errors.phone} /> : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-charcoal">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : "email-hint"}
            className={inputClass}
          />
          <p id="email-hint" className="mt-2 text-sm text-muted">
            Optional, unless you prefer a reply by email.
          </p>
          {errors.email ? <ErrorText id="email-error" message={errors.email} /> : null}
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm text-charcoal">
            Service required <span className="text-gold-deep">*</span>
          </label>
          <select
            id="service"
            name="service"
            defaultValue={selected}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {enquiryServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? <ErrorText id="service-error" message={errors.service} /> : null}
        </div>
        <div>
          <label htmlFor="location" className="mb-2 block text-sm text-charcoal">
            Project location <span className="text-gold-deep">*</span>
          </label>
          <input
            id="location"
            name="location"
            autoComplete="address-level2"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
            className={inputClass}
          />
          {errors.location ? <ErrorText id="location-error" message={errors.location} /> : null}
        </div>
        <div>
          <label htmlFor="description" className="mb-2 block text-sm text-charcoal">
            Project description <span className="text-gold-deep">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "description-error" : undefined}
            className={inputClass}
          />
          {errors.description ? <ErrorText id="description-error" message={errors.description} /> : null}
        </div>
        <fieldset>
          <legend className="text-sm text-charcoal">
            Preferred contact method <span className="text-gold-deep">*</span>
          </legend>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {contactMethods.map((method) => (
              <label key={method} className="inline-flex min-h-11 items-center gap-2 border border-line px-3 text-sm">
                <input type="radio" name="contactMethod" value={method} />
                {method}
              </label>
            ))}
          </div>
          {errors.contactMethod ? <ErrorText id="contact-error" message={errors.contactMethod} /> : null}
        </fieldset>
      </div>

      {state.status === "success" ? (
        <p className="mt-6 border border-line bg-ivory px-4 py-3 text-sm leading-relaxed" role="status">
          {state.message}
        </p>
      ) : null}
      {state.status === "error" && state.message ? (
        <p className="mt-6 border border-line bg-ivory px-4 py-3 text-sm leading-relaxed" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-gold px-6 text-[11px] uppercase tracking-[0.16em] text-charcoal disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function ErrorText({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 text-sm text-charcoal" role="alert">
      {message}
    </p>
  );
}
