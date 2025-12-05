import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import ziskLogo from '@/assets/zisk-logo.png';
import heroBg from '@/assets/hero-bg.png';
import TestnetPopup from './TestnetPopup';
import { toast } from '@/hooks/use-toast';

export const HeroSection = () => {
  const [showTestnetPopup, setShowTestnetPopup] = useState(false);

  const handleTestnetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTestnetPopup(true);
  };

  const copyToClipboard = async (text: string) => {
    try {
      // Check if the Clipboard API is available
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback method for insecure contexts or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        await document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      toast({
        title: "Copied to clipboard!",
        description: "The CA address has been copied successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error);
      toast({
        title: "Copy failed",
        description: "Could not copy the address to clipboard.",
        variant: "destructive",
      });
    }
  };

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

          {/* Official CA Address */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 w-full max-w-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary font-medium">$ZKTECH Official CA :</span>
              <div
                onClick={() => copyToClipboard("0xdBE191945f89b81200c0093d86682aC11D3170a8")}
                className="flex items-center gap-2 bg-muted hover:bg-muted/80 rounded-lg px-3 py-2 font-mono text-sm cursor-pointer transition-colors"
              >
                <span className="text-primary">$</span>
                <span className="truncate max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
                  0xdBE191945f89b81200c0093d86682aC11D3170a8
                </span>
                <Copy className="h-4 w-4 text-primary flex-shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="neonGreen" size="xl" onClick={handleTestnetClick}>
              Join Testnet
            </Button>
            <a href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0xdBE191945f89b81200c0093d86682aC11D3170a8" target="_blank" rel="noopener noreferrer">
              <Button
                variant="neonOrange"
                size="xl"
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">BUY $ZKTECH</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </Button>
            </a>
            <a href="https://docs.zisktech.sbs" target="_blank" rel="noopener noreferrer">
              <Button variant="neonPurple" size="xl">
                Explore Documentation
              </Button>
            </a>
          </motion.div>

        </div>
      </div>
      <TestnetPopup isOpen={showTestnetPopup} onClose={() => setShowTestnetPopup(false)} />
    </section>
  );
};
