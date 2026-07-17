import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 'nyaya-ai',
    title: 'NyayaAI',
    summary: 'AI legal assistant platform for rapid case analysis and document drafting.',
    problem: 'Legal professionals spend countless hours manually reviewing precedents and drafting standard documents.',
    solution: 'An AI-powered platform utilizing RAG to search legal databases and generate context-aware legal documents in minutes.',
    architecture: 'Next.js frontend communicating with a Python/FastAPI backend. LangChain orchestrates the LLM calls and vector database (Pinecone) queries.',
    features: ['Semantic Search', 'Automated Drafting', 'Citation Verification', 'Secure Document Storage'],
    tech: ['React', 'Python', 'FastAPI', 'LangChain', 'Pinecone', 'OpenAI'],
    role: 'Lead AI Engineer & Full Stack Developer',
    challenges: 'Ensuring hallucination-free responses required complex prompt engineering and strict RAG pipeline validation.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'llm-model-comparison',
    title: 'LLM Model Comparison',
    summary: 'A benchmarking tool to evaluate and compare the performance of various Large Language Models.',
    problem: 'Choosing the right LLM for a specific use case is challenging due to the rapid release of new models and lack of standardized benchmarks.',
    solution: 'An interactive platform that runs standardized prompts across multiple models and aggregates metrics for cost, latency, and response quality.',
    architecture: 'Python backend using LangChain to interface with multiple APIs (OpenAI, Anthropic, local models), with a React frontend for visualization.',
    features: ['Multi-model querying', 'Latency tracking', 'Cost estimation', 'Side-by-side comparison'],
    tech: ['Python', 'FastApi', 'OpenAI API', 'HuggingFace', 'llamaAi'],
    role: 'AI Engineer',
    challenges: 'Managing API rate limits and handling asynchronous requests to multiple LLM providers simultaneously.',
    github: 'https://github.com/Dhanunjaya23-02-2006/llm_model_comparison',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'railway-exam',
    title: 'Railway Exam Platform',
    summary: 'Comprehensive testing and analytics platform for railway recruitment exams.',
    problem: 'Candidates lack accessible, realistic mock tests with detailed performance analytics.',
    solution: 'A scalable web app providing timed tests, detailed analytics, and AI-generated study plans.',
    architecture: 'MERN stack application with Redis caching for real-time leaderboard updates.',
    features: ['Timed Mocks', 'Performance Analytics', 'AI Study Planner', 'Peer Ranking'],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis'],
    role: 'Full Stack Developer',
    challenges: 'Optimizing database queries to support thousands of concurrent users during mock test weekends.',
    github: 'https://github.com/Dhanunjaya23-02-2006/TechIq',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'smartcampusai',
    title: 'SmartCampusAi',
    summary: 'A smart platform for campus management and automation.',
    problem: 'Traditional campus operations are often fragmented and rely heavily on manual tracking.',
    solution: 'An integrated AI-powered system that centralizes campus resources and automates operations.',
    architecture: 'Built to scale with modular components for easy integration with existing university databases.',
    features: ['Automated Tracking', 'Resource Booking', 'Analytics Dashboard', 'Role-based Access'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    role: 'Full Stack Developer',
    challenges: 'Integrating various legacy subsystems into a single unified dashboard while maintaining data integrity.',
    github: 'https://github.com/Dhanunjaya23-02-2006/SmartCampusAi',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000'
  }
];

export const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="text-accent">Products</span>
          </h2>
          <p className="text-xl text-textMuted max-w-2xl">
            A selection of production-ready applications I've engineered from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group cursor-pointer overflow-hidden flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <ExternalLink className="text-textMuted group-hover:text-primary transition-colors" size={20} />
                </div>
                <p className="text-textMuted mb-6 flex-grow">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-textMain">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-textMuted">+{project.tech.length - 3}</span>}
                </div>
                <button className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Case Study <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-white/10 rounded-2xl overflow-y-auto custom-scrollbar shadow-2xl z-10 flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="h-64 md:h-96 w-full relative flex-shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-xl text-primary font-medium">{selectedProject.role}</p>
                </div>
              </div>

              <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-2xl font-bold mb-3">Problem</h3>
                    <p className="text-textMuted leading-relaxed">{selectedProject.problem}</p>
                  </section>
                  <section>
                    <h3 className="text-2xl font-bold mb-3">Solution</h3>
                    <p className="text-textMuted leading-relaxed">{selectedProject.solution}</p>
                  </section>
                  <section>
                    <h3 className="text-2xl font-bold mb-3">Architecture & Challenges</h3>
                    <p className="text-textMuted leading-relaxed mb-4">{selectedProject.architecture}</p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <p className="text-sm text-primary-light"><strong>Key Challenge:</strong> {selectedProject.challenges}</p>
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-bold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(tech => (
                        <span key={tech} className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-md text-textMain">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h3 className="text-xl font-bold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map(feature => (
                        <li key={feature} className="flex items-start gap-2 text-textMuted text-sm">
                          <span className="text-primary mt-1">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="flex flex-col gap-3 pt-4 border-t border-white/10">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-colors">
                      <FaGithub size={18} /> View Source
                    </a>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
