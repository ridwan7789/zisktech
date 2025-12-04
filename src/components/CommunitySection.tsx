import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, FileText, Send } from 'lucide-react';

const socialLinks = [
  {
    icon: Globe,
    name: 'Website',
    url: 'https://zisktech.sbs',
    color: 'from-secondary to-primary',
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    name: 'Twitter',
    url: 'https://x.com/ZiskTech',
    color: 'from-primary to-accent',
  },
  {
    icon: FileText,
    name: 'Documentation',
    url: 'https://app.gitbook.com/invite/FjuHFK2w4kRcduSHK3fz/H8XnM0jhq9ENZntNvWWc',
    color: 'from-accent to-secondary',
  },
  {
    icon: Send,
    name: 'Telegram',
    url: 'https://t.me/Zisktech',
    color: 'from-neon-soft to-primary',
  },
];

export const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Join the Zisk Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with our community of developers, validators, and Web3 enthusiasts.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              className="group"
            >
              <div className="glass-card p-6 flex flex-col items-center gap-4 hover:glow-border transition-all duration-500">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} bg-opacity-20 flex items-center justify-center group-hover:shadow-lg transition-all`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon className="w-8 h-8 text-foreground" />
                </motion.div>
                <span className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {social.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
