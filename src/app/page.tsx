import { FeaturedServices } from "@/components/home/FeaturedServices";
import { Hero } from "@/components/home/Hero";
import { HomeCta } from "@/components/home/HomeCta";
import { TechStrip } from "@/components/home/TechStrip";
import { Testimonials } from "@/components/home/Testimonials";
import {
  getCompany,
  getServices,
  getStats,
  getTechStack,
  getTestimonials,
} from "@/lib/api";

export default async function HomePage() {
  const [services, techStack, testimonials, stats, company] = await Promise.all([
    getServices(),
    getTechStack(),
    getTestimonials(),
    getStats(),
    getCompany(),
  ]);

  return (
    <>
      <Hero />
      <FeaturedServices services={services} />
      <TechStrip techStack={techStack} />
      <Testimonials testimonials={testimonials} />
      <HomeCta stats={stats} email={company.email} />
    </>
  );
}
