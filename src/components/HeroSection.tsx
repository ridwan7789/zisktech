import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ziskLogo from '@/assets/zisk-logo.png';
import heroBg from '@/assets/hero-bg.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-primary/30 rounded-2xl hidden lg:block"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 0.3 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-20 h-20 border border-secondary/30 rounded-full hidden lg:block"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -30, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ opacity: 0.4 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative">
              <img 
                src={ziskLogo} 
                alt="Zisk Tech Logo" 
                className="w-32 h-32 md:w-40 md:h-40 animate-pulse-glow"
              />
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 bg-secondary/30 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl"
          >
            <span className="gradient-text">Real-Time Proof</span>
            <br />
            <span className="text-foreground">Infrastructure for Web3</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            <span className="text-secondary">Instant Trust.</span>{' '}
            <span className="text-accent">Infinite Possibility.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="neonGreen" size="xl">
              Join Testnet
            </Button>
            <Button variant="neonPurple" size="xl">
              Explore Documentation
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 text-secondary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
