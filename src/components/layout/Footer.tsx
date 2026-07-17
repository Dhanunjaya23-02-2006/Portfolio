export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-display font-bold text-gradient mb-6 tracking-tighter">
          AD<span className="text-textMain">.</span>
        </h2>
        
        <p className="text-textMuted mb-8 max-w-md mx-auto">
          Crafting premium digital experiences through code, design, and innovation.
        </p>
        
        <div className="flex items-center justify-center gap-6 text-sm text-textMuted mb-12">
          <a href="#home" className="hover:text-white transition-colors interactive">Home</a>
          <a href="#about" className="hover:text-white transition-colors interactive">About</a>
          <a href="#projects" className="hover:text-white transition-colors interactive">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors interactive">Contact</a>
        </div>
        
        <div className="text-xs text-white/30 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ambati Dhanunjaya. All rights reserved.</p>
          <p>Designed & Built with React, Tailwind & Three.js</p>
        </div>
      </div>
    </footer>
  );
};
