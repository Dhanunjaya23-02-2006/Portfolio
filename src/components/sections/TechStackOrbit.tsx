import { motion } from 'framer-motion';
import { Brain, Code2, Database, LayoutTemplate, Server, Cpu, Globe } from 'lucide-react';

export const TechStackOrbit = () => {
  return (
    <section className="py-24 bg-card/30 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tech <span className="text-accent">Ecosystem</span>
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            A cohesive stack powering seamless digital experiences.
          </p>
        </motion.div>

        <div className="relative w-full max-w-md mx-auto h-[400px] flex items-center justify-center">
          {/* Core */}
          <div className="absolute z-20 w-24 h-24 rounded-full glass-card flex items-center justify-center border-primary shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Brain size={40} className="text-primary animate-pulse" />
          </div>

          {/* Orbit 1 */}
          <div className="absolute w-[250px] h-[250px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite]" />
          <motion.div 
            className="absolute w-[250px] h-[250px] animate-[spin_15s_linear_infinite]"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
              <Code2 size={20} className="text-white" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
              <Database size={20} className="text-white" />
            </div>
          </motion.div>

          {/* Orbit 2 */}
          <div className="absolute w-[380px] h-[380px] border border-white/5 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
          <motion.div 
            className="absolute w-[380px] h-[380px] animate-[spin_25s_linear_infinite_reverse]"
          >
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
              <Server size={20} className="text-white" />
            </div>
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
              <Globe size={20} className="text-white" />
            </div>
            <div className="absolute -top-4 right-1/4 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
              <Cpu size={20} className="text-white" />
            </div>
            <div className="absolute -bottom-4 left-1/4 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
              <LayoutTemplate size={20} className="text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
