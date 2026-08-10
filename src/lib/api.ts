/**
 * Data access layer.
 * Frontend currently reads mock arrays.
 * Rutaba can replace these with Express API calls later.
 */

import { company, navigation, stats } from "@/data/company";
import { consultationQuestions } from "@/data/consultation";
import { founders, team } from "@/data/founders";
import {
  serviceCategories,
  services,
  techStack,
} from "@/data/services";
import { clients, testimonials } from "@/data/testimonials";

const USE_API = process.env.NEXT_PUBLIC_USE_API === "true";
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

async function fetchFromApi<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getCompany() {
  if (USE_API) {
    const data = await fetchFromApi<typeof company>("/company");
    if (data) return data;
  }
  return company;
}

export async function getNavigation() {
  if (USE_API) {
    const data = await fetchFromApi<typeof navigation>("/navigation");
    if (data) return data;
  }
  return navigation;
}

export async function getStats() {
  if (USE_API) {
    const data = await fetchFromApi<typeof stats>("/stats");
    if (data) return data;
  }
  return stats;
}

export async function getServices() {
  if (USE_API) {
    const data = await fetchFromApi<typeof services>("/services");
    if (data) return data;
  }
  return services;
}

export async function getServiceById(id: string) {
  if (USE_API) {
    const data = await fetchFromApi<(typeof services)[number] | null>(
      `/services/${id}`,
    );
    if (data) return data;
  }
  return services.find((service) => service.id === id) ?? null;
}

export async function getServiceCategories() {
  if (USE_API) {
    const data = await fetchFromApi<typeof serviceCategories>(
      "/service-categories",
    );
    if (data) return data;
  }
  return serviceCategories;
}

export async function getTechStack() {
  if (USE_API) {
    const data = await fetchFromApi<typeof techStack>("/tech-stack");
    if (data) return data;
  }
  return techStack;
}

export async function getFounders() {
  if (USE_API) {
    const data = await fetchFromApi<typeof founders>("/founders");
    if (data) return data;
  }
  return founders;
}

export async function getTeam() {
  if (USE_API) {
    const data = await fetchFromApi<typeof team>("/team");
    if (data) return data;
  }
  return team;
}

export async function getTestimonials() {
  if (USE_API) {
    const data = await fetchFromApi<typeof testimonials>("/testimonials");
    if (data) return data;
  }
  return testimonials;
}

export async function getClients() {
  if (USE_API) {
    const data = await fetchFromApi<typeof clients>("/clients");
    if (data) return data;
  }
  return clients;
}

export async function getConsultationQuestions() {
  if (USE_API) {
    const data = await fetchFromApi<typeof consultationQuestions>(
      "/consultation/questions",
    );
    if (data) return data;
  }
  return consultationQuestions;
}

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type ConsultationPayload = Record<string, string | string[]>;

export async function submitContact(payload: ContactPayload) {
  if (USE_API) {
    const res = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to submit contact form");
    return res.json();
  }

  // Mock success until Express endpoint is ready
  console.info("[mock] contact submitted", payload);
  return { ok: true, mocked: true };
}

export async function submitConsultation(payload: ConsultationPayload) {
  if (USE_API) {
    const res = await fetch(`${API_BASE}/consultation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to submit consultation");
    return res.json();
  }

  console.info("[mock] consultation submitted", payload);
  return { ok: true, mocked: true };
}
