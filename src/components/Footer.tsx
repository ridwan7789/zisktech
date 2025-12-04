import { motion } from 'framer-motion';
import ziskLogo from '@/assets/zisk-logo.png';

const footerLinks = [
  { name: 'Documentation', href: 'https://app.gitbook.com/invite/FjuHFK2w4kRcduSHK3fz/H8XnM0jhq9ENZntNvWWc' },
  { name: 'API Reference', href: '#' },
  { name: 'Testnet', href: '#' },
  { name: 'GitHub', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Neon Divider */}
        <div className="neon-line mb-12" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <img 
              src={ziskLogo} 
              alt="Zisk Tech" 
              className="w-10 h-10 animate-pulse-glow"
            />
            <span className="font-heading text-xl font-bold gradient-text">Zisk Tech</span>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-sm"
          >
            © 2025 Zisk Tech. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
