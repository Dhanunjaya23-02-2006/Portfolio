import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Satyanarayana',
    role: 'Computer Science Professor (AIML)',
    content: 'Dhanunjaya is an exceptional engineer. His ability to grasp complex ML concepts and translate them into production-ready code is rare for his age.',
  },
  {
    name: 'Ashok',
    role: 'Founder of Render Reply',
    content: 'Working with Dhanunjaya on our MVP was a game-changer. He delivered a flawless full-stack application weeks ahead of schedule. Highly recommended.',
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Words from <span className="text-secondary">Others</span>
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            What people say about my work ethic and engineering capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={60} />
              <div className="relative z-10 h-full flex flex-col">
                <p className="text-textMuted leading-relaxed flex-grow mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
