import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ziskLogo from '@/assets/zisk-logo.png';
import TestnetPopup from './TestnetPopup';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Developers', href: '#developers' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomics' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTestnetPopup, setShowTestnetPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTestnetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTestnetPopup(true);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <motion.img
              src={ziskLogo}
              alt="Zisk Tech"
              className="w-10 h-10"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
            <span className="font-heading text-xl font-bold gradient-text hidden sm:inline">
              Zisk Tech
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="neonGreen" size="sm" className="hidden sm:flex" onClick={handleTestnetClick}>
              Join Testnet
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="neonGreen" className="mt-4 sm:hidden" onClick={handleTestnetClick}>
                Join Testnet
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <TestnetPopup isOpen={showTestnetPopup} onClose={() => setShowTestnetPopup(false)} />
    </motion.header>
  );
};
