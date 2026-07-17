import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailtoLink = `mailto:dhanunjayaambati23@gmail.com?subject=Portfolio Contact: ${name}&body=${encodeURIComponent(message as string)}%0D%0A%0D%0AFrom: ${name} (${email})`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 p-12 bg-card/40">
            <h2 className="text-4xl font-display font-bold mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-textMuted mb-12">
              Currently open to new opportunities, collaborations, and freelance projects. Reach out and let's build something amazing together.
            </p>

            <div className="space-y-6">
              <a href="mailto:dhanunjayaambati23@gmail.com" className="flex items-center gap-4 text-textMuted hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm">Email</p>
                  <p className="font-medium text-white">dhanunjayaambati23@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ambati-dhanunjaya-36b980309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-textMuted hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaLinkedin size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm">LinkedIn</p>
                  <p className="font-medium text-white">Ambati Dhanunjaya</p>
                </div>
              </a>

              <a href="https://github.com/Dhanunjaya23-02-2006/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-textMuted hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaGithub size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm">GitHub</p>
                  <p className="font-medium text-white">@Dhanunjaya23-02-2006</p>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-12 relative bg-card/20">
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center bg-card/90 backdrop-blur-md z-20 rounded-r-3xl"
              >
                <CheckCircle2 size={64} className="text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-textMuted">I'll get back to you as soon as possible.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-medium mb-2 text-textMuted">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-textMuted">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-textMuted">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-blue-600 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
