import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Founder & Lead Engineer',
    company: 'NyayaAI',
    date: '2025 - Present',
    description: 'Built an AI-driven legal platform for automated document drafting and precedent analysis. Scaled the system to handle thousands of concurrent queries using FastAPI, Pinecone, and Next.js.',
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    date: '2023 - Present',
    description: 'Actively contributing to AI and full-stack repositories. Focused on improving performance, adding features to RAG frameworks, and optimizing React component libraries.',
  },
  {
    role: 'AI Researcher',
    company: 'Academic Projects',
    date: '2024',
    description: 'Conducted research on fine-tuning Large Language Models for domain-specific tasks. Implemented parameter-efficient fine-tuning (PEFT) techniques using PyTorch.',
  },

];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/30 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-textMuted">
            A track record of building products and pushing boundaries.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:bg-card/90 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-lg text-accent font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-textMuted">
                    {exp.date}
                  </span>
                </div>
              </div>
              <p className="text-textMuted leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
