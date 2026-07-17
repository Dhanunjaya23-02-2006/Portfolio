import { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutTimeline } from './components/sections/AboutTimeline';
import { Skills3D } from './components/sections/Skills3D';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Services } from './components/sections/Services';
import { DevProcess } from './components/sections/DevProcess';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { TechStackOrbit } from './components/sections/TechStackOrbit';
import { WhyHireMe } from './components/sections/WhyHireMe';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/ui/CommandPalette';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-textMain relative selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <CommandPalette />
      <Navbar />
      
      <main>
        <Hero />
        <AboutTimeline />
        <Skills3D />
        <FeaturedProjects />
        <Services />
        <DevProcess />
        <Experience />
        <Testimonials />
        <TechStackOrbit />
        <WhyHireMe />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
