import { TiltCard } from '../ui/TiltCard';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "TechIQ Preparation Platform",
    description: "A technical interview preparation platform with dynamic question generation and real-time tracking.",
    tech: ["React", "Flask", "PostgreSQL", "Gen AI", "Railway"],
    github: "https://github.com/Dhanunjaya23-02-2006/",
    demo: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Colldge Task Manager",
    description: "A full-stack task management platform for students featuring deadline tracking and secure authentication.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Dhanunjaya23-02-2006/",
    demo: "#",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lumina Analytics",
    description: "Real-time business intelligence dashboard with predictive modeling. Processes millions of events per second with sub-second latency.",
    tech: ["Next.js", "Go", "PostgreSQL", "Kafka", "Redis"],
    github: "https://github.com/Dhanunjaya23-02-2006/",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ethereal E-commerce",
    description: "Premium headless e-commerce solution with ultra-fast page loads, 3D product previews, and a customized checkout flow.",
    tech: ["React", "Three.js", "Shopify API", "Tailwind", "Stripe"],
    github: "https://github.com/Dhanunjaya23-02-2006/",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-display font-bold mb-16 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={index} className="h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-textMuted mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-cyan">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 border-t border-white/10 pt-6">
                  <a href={project.github} className="flex items-center gap-2 text-sm hover:text-primary transition-colors interactive">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm hover:text-cyan transition-colors interactive">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
