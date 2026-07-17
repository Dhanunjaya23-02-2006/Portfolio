import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Layout, Server, Brain, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Idea', desc: 'Understanding the problem and defining core objectives.' },
  { icon: PenTool, title: 'Planning', desc: 'Architecting the solution and selecting the right tech stack.' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Crafting premium, user-centric interfaces.' },
  { icon: Server, title: 'Backend', desc: 'Building robust APIs and scalable database schemas.' },
  { icon: Brain, title: 'AI Integration', desc: 'Embedding LLMs and machine learning models.' },
  { icon: ShieldCheck, title: 'Testing', desc: 'Ensuring security, performance, and reliability.' },
  { icon: Rocket, title: 'Deployment', desc: 'Launching the product to production seamlessly.' }
];

export const DevProcess = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Development <span className="text-secondary">Process</span>
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            A structured approach to transforming ideas into production-ready products.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-white/10 -z-10" />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-4 border border-white/10 group hover:border-primary/50 transition-colors">
                    <Icon className="text-textMuted group-hover:text-primary transition-colors" size={28} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-textMuted hidden md:block">{step.desc}</p>
                  
                  {/* Mobile connecting line */}
                  {index !== steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-white/10 my-2 md:hidden" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
