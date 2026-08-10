"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  consultationContactFields,
  type ConsultationQuestion,
} from "@/data/consultation";
import { submitConsultation } from "@/lib/api";

type Answers = Record<string, string | string[]>;

type Props = {
  questions: ConsultationQuestion[];
};

export function ConsultationFlow({ questions }: Props) {
  const steps = useMemo(() => {
    const base = questions.filter((q) => q.id !== "contact");
    return [...base, { id: "contact", kind: "contact" as const }];
  }, [questions]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const current = steps[index];
  const isContactStep = "kind" in current && current.kind === "contact";
  const question = isContactStep
    ? null
    : (current as ConsultationQuestion);
  const progress = ((index + 1) / steps.length) * 100;

  function toggleMulti(questionId: string, optionId: string) {
    setAnswers((prev) => {
      const currentValue = Array.isArray(prev[questionId])
        ? [...(prev[questionId] as string[])]
        : [];
      const next = currentValue.includes(optionId)
        ? currentValue.filter((id) => id !== optionId)
        : [...currentValue, optionId];
      return { ...prev, [questionId]: next };
    });
  }

  function canContinue() {
    if (isContactStep) {
      return contact.name.trim().length > 1 && contact.email.includes("@");
    }
    if (!question) return false;
    if (!question.required) return true;
    const value = answers[question.id];
    if (question.type === "multi") {
      return Array.isArray(value) && value.length > 0;
    }
    return typeof value === "string" && value.trim().length > 0;
  }

  async function handleNext() {
    if (!canContinue()) {
      setError("Please complete this step to continue.");
      return;
    }
    setError("");

    if (index < steps.length - 1) {
      setIndex((v) => v + 1);
      return;
    }

    setStatus("submitting");
    try {
      await submitConsultation({
        ...answers,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      });
      setStatus("done");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[2rem] border border-line bg-surface p-8 text-center shadow-[var(--shadow)] md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
          Request received
        </p>
        <h2 className="display mt-3 text-3xl font-bold text-ink md:text-4xl">
          Thanks — we’ll be in touch shortly
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Back home</Button>
          <Button href="/services" variant="outline-light">
            Explore services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-[var(--shadow)] md:p-10">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm text-slate">
          <span>
            Step {index + 1} of {steps.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-mist">
          <div
            className="h-full rounded-full bg-teal transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {question ? (
        <div>
          <h2 className="display text-2xl font-bold text-ink md:text-3xl">
            {question.title}
          </h2>
          <p className="mt-3 text-slate">{question.subtitle}</p>

          {(question.type === "single" || question.type === "multi") && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {question.options?.map((option) => {
                const selected =
                  question.type === "multi"
                    ? Array.isArray(answers[question.id]) &&
                      (answers[question.id] as string[]).includes(option.id)
                    : answers[question.id] === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      if (question.type === "multi") {
                        toggleMulti(question.id, option.id);
                      } else {
                        setAnswers((prev) => ({
                          ...prev,
                          [question.id]: option.id,
                        }));
                      }
                    }}
                    className={[
                      "rounded-2xl border p-4 text-left transition",
                      selected
                        ? "border-teal bg-teal/8 shadow-[0_10px_30px_rgba(18,165,148,0.12)]"
                        : "border-line bg-paper hover:border-teal/35",
                    ].join(" ")}
                  >
                    <p className="font-semibold text-ink">{option.label}</p>
                    {option.description ? (
                      <p className="mt-1 text-sm text-slate">
                        {option.description}
                      </p>
                    ) : null}
                  </button>
                );
              })}
            </div>
          )}

          {question.type === "textarea" ? (
            <textarea
              className="mt-8 min-h-36 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-teal"
              placeholder={question.placeholder}
              value={(answers[question.id] as string) ?? ""}
              onChange={(e) =>
                setAnswers((prev) => ({
                  ...prev,
                  [question.id]: e.target.value,
                }))
              }
            />
          ) : null}
        </div>
      ) : (
        <div>
          <h2 className="display text-2xl font-bold text-ink md:text-3xl">
            How can we reach you?
          </h2>
          <p className="mt-3 text-slate">
            We’ll use this to confirm your free consultation.
          </p>
          <div className="mt-8 grid gap-4">
            {consultationContactFields.map((field) => (
              <label key={field.id} className="block">
                <span className="mb-2 block text-sm font-semibold text-ink">
                  {field.label}
                  {field.required ? " *" : ""}
                </span>
                <input
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={contact[field.id]}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-2xl border border-line bg-paper px-4 text-ink outline-none transition focus:border-teal"
                />
              </label>
            ))}
          </div>
        </div>
      )}

      {error ? <p className="mt-5 text-sm text-clay">{error}</p> : null}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button
          type="button"
          variant="outline-light"
          disabled={index === 0 || status === "submitting"}
          onClick={() => {
            setError("");
            setIndex((v) => Math.max(0, v - 1));
          }}
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={handleNext}
          disabled={status === "submitting"}
        >
          {index === steps.length - 1
            ? status === "submitting"
              ? "Submitting..."
              : "Submit request"
            : "Continue"}
        </Button>
      </div>
    </div>
  );
}
