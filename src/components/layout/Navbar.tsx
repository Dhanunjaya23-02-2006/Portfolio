import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Services', to: 'services' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button onClick={() => setIsImageModalOpen(true)} className="flex items-center gap-2 focus:outline-none interactive">
          <img src="/profile.png" alt="Ambati Dhanunjaya" className="w-10 h-10 rounded-full object-cover border-2 border-primary/50 hover:border-primary transition-colors cursor-pointer" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 glass-card px-6 py-2 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-80}
              className="text-sm font-medium text-textMuted hover:text-white transition-colors cursor-pointer interactive"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="px-5 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] cursor-pointer interactive"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-textMain interactive"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/5 py-4 md:hidden flex flex-col items-center gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-textMuted hover:text-white transition-colors cursor-pointer interactive"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src="/profile.png"
              alt="Ambati Dhanunjaya Large"
              className="max-w-full max-h-[85vh] rounded-xl border-2 border-primary/50 object-contain shadow-[0_0_50px_rgba(124,58,237,0.3)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
