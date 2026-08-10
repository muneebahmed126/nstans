"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { submitContact } from "@/lib/api";

const projectTypes = [
  "SaaS Product",
  "MVP",
  "Custom Software",
  "Admin Dashboard",
  "API / Backend",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    projectType: "SaaS Product",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in name, email, and message.");
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      await submitContact({
        name: form.name,
        email: form.email,
        company: form.companyName,
        message: `[${form.projectType}] ${form.message}${form.phone ? `\nPhone: ${form.phone}` : ""}`,
      });
      setStatus("done");
      setForm({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        projectType: "SaaS Product",
        message: "",
      });
    } catch {
      setStatus("error");
      setError("Unable to send right now. Email or WhatsApp us instead.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-6 shadow-[var(--shadow)] md:p-8"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
            Project inquiry
          </p>
          <h2 className="display mt-2 text-2xl font-bold text-ink md:text-3xl">
            Tell us what you want to build
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full name"
            value={form.name}
            onChange={(value) => setForm((p) => ({ ...p, name: value }))}
            placeholder="Your name"
            required
          />
          <Field
            label="Work email"
            type="email"
            value={form.email}
            onChange={(value) => setForm((p) => ({ ...p, email: value }))}
            placeholder="you@company.com"
            required
          />
          <Field
            label="Phone / WhatsApp"
            value={form.phone}
            onChange={(value) => setForm((p) => ({ ...p, phone: value }))}
            placeholder={company.phoneDisplay}
          />
          <Field
            label="Company"
            value={form.companyName}
            onChange={(value) => setForm((p) => ({ ...p, companyName: value }))}
            placeholder="Company name"
          />
        </div>

        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-ink">Project type</p>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => {
              const active = form.projectType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, projectType: type }))}
                  className={[
                    "rounded-full px-3.5 py-2 text-xs font-semibold transition",
                    active
                      ? "bg-teal text-white"
                      : "bg-mist text-ink hover:bg-teal/15 hover:text-teal-deep",
                  ].join(" ")}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        <label className="mt-4 block">
          <span className="mb-2 block text-sm font-semibold text-ink">
            Message *
          </span>
          <textarea
            required
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
            placeholder="Goals, timeline, must-haves, current tools..."
            className="min-h-40 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-teal"
          />
        </label>

        {error ? <p className="mt-4 text-sm text-clay">{error}</p> : null}
        {status === "done" ? (
          <p className="mt-4 rounded-2xl bg-teal/10 px-4 py-3 text-sm text-teal-deep">
            Thanks — your message is in. We’ll reply soon.
          </p>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${company.email}`}
              className="font-medium text-slate underline-offset-4 hover:text-teal-deep hover:underline"
            >
              Email
            </a>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#128C7E] underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
          </div>
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send message"}
          </Button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-2xl border border-line bg-paper px-4 text-ink outline-none transition focus:border-teal"
      />
    </label>
  );
}
