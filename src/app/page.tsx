import { Hero } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import Experience from "@/components/Experience";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Projects } from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { AboutMe } from "@/components/AboutMe";

export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <AuroraBackground>
        <Hero />
      </AuroraBackground>
      <Experience />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

