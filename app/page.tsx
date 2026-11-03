import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <Testimonials />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
