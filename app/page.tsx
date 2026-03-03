import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import ProfessionalFocus from "@/components/ProfessionalFocus";
import PersonalSection from "@/components/PersonalSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <TechStack />
      <ProfessionalFocus />
      <PersonalSection />
      <Contact />
    </main>
  );
}