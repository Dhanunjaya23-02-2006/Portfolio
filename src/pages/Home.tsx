import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { Projects } from "../components/Projects/Projects";
import { Education } from "../components/Education/Education";
import { Certifications } from "../components/Certifications/Certifications";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}