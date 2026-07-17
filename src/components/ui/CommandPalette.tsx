import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Monitor, Mail, User, Code, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const actions = [
    { id: 'home', name: 'Go to Home', icon: <Monitor size={18} />, section: 'home' },
    { id: 'about', name: 'About Me', icon: <User size={18} />, section: 'about' },
    { id: 'projects', name: 'View Projects', icon: <Code size={18} />, section: 'projects' },
    { id: 'experience', name: 'Academic Journey', icon: <Briefcase size={18} />, section: 'experience' },
    { id: 'contact', name: 'Contact Me', icon: <Mail size={18} />, section: 'contact' },
  ];

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[200]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg bg-secondary border border-white/10 rounded-xl overflow-hidden shadow-2xl z-[201]"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10">
              <Search size={20} className="text-textMuted mr-3" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-white focus:outline-none placeholder:text-textMuted"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-textMuted">ESC</span>
            </div>

            <div className="max-h-72 overflow-y-auto py-2">
              {filteredActions.length === 0 ? (
                <div className="px-4 py-8 text-center text-textMuted">No results found.</div>
              ) : (
                filteredActions.map((action) => (
                  <Link
                    key={action.id}
                    to={action.section}
                    smooth={true}
                    duration={800}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors interactive group"
                  >
                    <span className="text-textMuted group-hover:text-primary transition-colors">
                      {action.icon}
                    </span>
                    <span className="ml-3 font-medium">{action.name}</span>
                  </Link>
                ))
              )}
            </div>
            
            <div className="px-4 py-2 border-t border-white/10 bg-white/5 flex items-center justify-between text-xs text-textMuted">
              <div className="flex items-center gap-4">
                <span><kbd className="font-mono bg-white/10 px-1 rounded">↑</kbd> <kbd className="font-mono bg-white/10 px-1 rounded">↓</kbd> to navigate</span>
                <span><kbd className="font-mono bg-white/10 px-1 rounded">↵</kbd> to select</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
