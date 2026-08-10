"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  agentFallback,
  agentKnowledge,
  agentSuggestions,
  agentWelcome,
} from "@/data/agent";
import { company } from "@/data/company";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

function rankAnswer(input: string) {
  const normalized = input.toLowerCase();
  let best: { score: number; answer: string } | null = null;

  for (const item of agentKnowledge) {
    const score = item.keywords.reduce((total, keyword) => {
      return normalized.includes(keyword) ? total + keyword.length : total;
    }, 0);
    if (!best || score > best.score) {
      best = { score, answer: item.answer };
    }
  }

  if (!best || best.score === 0) return agentFallback;
  return best.answer;
}

export function AiAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "bot", text: agentWelcome },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !typing, [input, typing]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  function send(text: string) {
    const cleaned = text.trim();
    if (!cleaned || typing) return;

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: cleaned,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      const reply: ChatMessage = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: rankAnswer(cleaned),
      };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 550);
  }

  return (
    <div className="fixed bottom-24 right-5 z-[60] flex flex-col items-end gap-3 md:bottom-7 md:right-7">
      {open ? (
        <div className="flex h-[min(520px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-[var(--shadow)]">
          <div className="flex items-center justify-between bg-[linear-gradient(135deg,#0c1419,#0c7f73)] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Nstans AI Assistant</p>
              <p className="text-xs text-white/70">Ask about services, stack, or hiring</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-sm"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-paper px-3 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={[
                  "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-6",
                  message.role === "user"
                    ? "ml-auto bg-teal text-white"
                    : "bg-surface text-ink ring-1 ring-line",
                ].join(" ")}
              >
                {message.text}
              </div>
            ))}
            {typing ? (
              <div className="w-fit rounded-2xl bg-surface px-3.5 py-2.5 text-sm text-slate ring-1 ring-line">
                Typing…
              </div>
            ) : null}
            <div ref={endRef} />
          </div>

          <div className="border-t border-line bg-surface p-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {agentSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => send(suggestion)}
                  className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-ink transition hover:bg-teal/15 hover:text-teal-deep"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="h-11 flex-1 rounded-xl border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-teal"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="h-11 rounded-xl bg-teal px-4 text-sm font-semibold text-white transition enabled:hover:bg-teal-deep disabled:opacity-50"
              >
                Send
              </button>
            </form>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-center text-xs font-medium text-teal-deep hover:underline"
            >
              Prefer a human? WhatsApp us
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="grid h-14 w-14 place-items-center rounded-full bg-night text-white shadow-[0_16px_40px_rgba(12,20,25,0.35)] transition hover:-translate-y-1 hover:scale-105"
        aria-label="Open AI assistant"
      >
        <span className="display text-lg font-bold text-teal-glow">AI</span>
      </button>
    </div>
  );
}
