import { motion } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  { year: '2023', title: 'Started B.Tech', description: 'Began formal education in computer science.' },
  { year: '2023', title: 'Python', description: 'Mastered core programming and data structures.' },
  { year: '2023', title: 'Web Development', description: 'Built full-stack applications with React and Node.js.' },
  { year: '2024', title: 'Machine Learning', description: 'Dove deep into predictive modeling and data science.' },
  { year: '2025', title: 'LLMs & RAG', description: 'Started engineering with Large Language Models.' },
  { year: '2025', title: 'Building Startups', description: 'Applied skills to create real-world products.' },
  { year: 'Today', title: 'Building AI Products', description: 'Developing scalable, intelligent solutions for the modern web.', highlight: true },
];

export const AboutTimeline = () => {
  const containerRef = useRef(null);

  return (
    <section id="about" className="py-24 bg-background relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-textMuted">
            My path from learning the basics to architecting AI-driven products.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} pl-8 md:pl-0`}
            >
              {/* Dot */}
              <div className={`absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${item.highlight ? 'bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'bg-textMuted'}`} />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className={`glass-card p-6 ${item.highlight ? 'border-primary/50 bg-primary/5' : ''}`}>
                  {item.year && (
                    <span className={`text-sm font-bold tracking-wider uppercase ${item.highlight ? 'text-primary' : 'text-textMuted'} mb-2 block`}>
                      {item.year}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-textMuted text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
