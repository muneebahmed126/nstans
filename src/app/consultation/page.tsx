import type { Metadata } from "next";
import { ConsultationFlow } from "@/components/consultation/ConsultationFlow";
import { getConsultationQuestions } from "@/lib/api";

export const metadata: Metadata = {
  title: "Free Consultation",
  description:
    "Tell Nstans about your project needs, timeline, stack preferences, and budget.",
};

export default async function ConsultationPage() {
  const questions = await getConsultationQuestions();

  return (
    <div className="bg-paper">
      <section className="border-b border-line bg-[linear-gradient(180deg,#102027_0%,#0c1419_100%)] pb-16 pt-32 text-white">
        <div className="container-page">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
            Free consultation
          </p>
          <h1 className="display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            A short flow to understand your project
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Answer a few questions about services, product type, stack, timeline,
            and budget. We’ll use this to prepare a clear next conversation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <ConsultationFlow questions={questions} />
        </div>
      </section>
    </div>
  );
}
