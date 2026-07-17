import { motion } from 'framer-motion';
import { Bot, Code2, Rocket, Workflow, LayoutDashboard, Database } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots & Agents',
    description: 'Intelligent conversational interfaces that understand context and automate customer support or internal workflows.',
  },
  {
    icon: Database,
    title: 'RAG Systems',
    description: 'Retrieval-Augmented Generation systems to allow LLMs to securely query your private enterprise data.',
  },
  {
    icon: Code2,
    title: 'Full Stack Web Apps',
    description: 'Scalable, performant, and secure web applications built with modern frameworks like React and Node.js.',
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Rapid prototyping and development for startups to validate ideas and reach the market faster.',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Dashboards',
    description: 'Beautiful, data-rich admin panels and analytics dashboards to monitor your business metrics in real-time.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connecting APIs and automating repetitive tasks to save hundreds of hours of manual labor.',
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-card/30 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What I <span className="text-primary">Deliver</span>
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            End-to-end engineering services tailored for startups and forward-thinking enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-textMuted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
