import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Strong AI engineering fundamentals and LLM orchestration.',
  'End-to-end full-stack product development from UI to backend.',
  'Experience architecting robust RAG pipelines and vector databases.',
  'Focus on clean, premium UI/UX implementation.',
  'Proficient in CI/CD, Docker, and seamless cloud deployments.',
  'Obsessed with performance, scalability, and code maintainability.'
];

export const WhyHireMe = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card p-10 md:p-16 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-[80px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why <span className="text-primary">Hire Me?</span>
              </h2>
              <p className="text-lg text-textMuted leading-relaxed mb-8">
                I bridge the gap between complex artificial intelligence research and user-friendly product design. I don't just write code; I build robust software that solves real business problems.
              </p>
              <div className="flex gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-3xl font-display font-bold text-white mb-1">95+</h4>
                  <p className="text-xs text-textMuted uppercase tracking-wider">Lighthouse</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-3xl font-display font-bold text-white mb-1">100</h4>
                  <p className="text-xs text-textMuted uppercase tracking-wider">Accessibility</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-3xl font-display font-bold text-white mb-1">100</h4>
                  <p className="text-xs text-textMuted uppercase tracking-wider">SEO</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-textMuted">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
