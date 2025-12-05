import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Layers } from 'lucide-react';
import verificationOrb from '@/assets/verification-orb.png';

const features = [
  {
    icon: Zap,
    title: 'Real-Time Proofs',
    description: 'Lightning-fast cryptographic verification enabling instant trust across decentralized systems.',
  },
  {
    icon: Shield,
    title: 'zk-Powered Validation',
    description: 'Zero-knowledge proofs ensure privacy while maintaining complete verification integrity.',
  },
  {
    icon: Layers,
    title: 'Modular Proof Layer',
    description: 'Flexible architecture that adapts to any blockchain or decentralized application.',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Zisk Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Zisk Tech is a real-time verification network combining lightweight cryptographic proofs
            and zk-powered validation for instant trust across Web3.
          </p>
        </motion.div>

        {/* Holographic Orb Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-16"
        >
          <motion.img 
            src={verificationOrb} 
            alt="Verification Orb" 
            className="w-full h-full object-contain"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:glow-green transition-all duration-500">
                <feature.icon className="w-7 h-7 text-secondary group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
