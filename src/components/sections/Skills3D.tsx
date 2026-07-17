import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  SiPython, SiOpenjdk, SiReact, SiNodedotjs, SiExpress,
  SiDjango, SiTensorflow,
  SiDocker, SiPostgresql,
  SiFlask, SiJavascript, SiHtml5, SiCss, SiTailwindcss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Brain } from 'lucide-react';

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Java', icon: SiOpenjdk, color: '#ED8B00' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },

  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Django', icon: SiDjango, color: '#44B78B' }, // Brighter green for dark mode
  { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },

  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'LangGraph', icon: Brain, color: '#8B5CF6' },
  { name: 'AWS', icon: FaAws, color: '#232F3E' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
];

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur group-hover:duration-200" />
      <div className="relative glass-card h-40 flex flex-col items-center justify-center gap-4 transition-colors duration-300 group-hover:bg-card/90">
        <Icon size={48} style={{ color: skill.color }} className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" />
        <span className="font-semibold text-textMain">{skill.name}</span>
      </div>
    </motion.div>
  );
};

export const Skills3D = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Technical <span className="text-secondary">Arsenal</span>
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            The tools and technologies I use to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto perspective-1000">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
