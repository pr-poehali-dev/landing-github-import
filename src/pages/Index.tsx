import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection 
        sectionRef={(el) => (sectionRefs.current[0] = el)} 
        isVisible={visibleSections.has(0)} 
      />
      <TestimonialsSection 
        sectionRef={(el) => (sectionRefs.current[1] = el)} 
        isVisible={visibleSections.has(1)} 
      />
      <ContactSection 
        sectionRef={(el) => (sectionRefs.current[2] = el)} 
        isVisible={visibleSections.has(2)} 
      />
      <Footer />
    </div>
  );
};

export default Index;
