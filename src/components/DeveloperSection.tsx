import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Code, ArrowRight } from 'lucide-react';
import developerVisual from '@/assets/developer-visual.png';

const codeLines = [
  { text: '$ npm install @zisk/sdk', delay: 0 },
  { text: '', delay: 0.5 },
  { text: 'import { ZiskProof } from "@zisk/sdk";', delay: 1 },
  { text: '', delay: 1.2 },
  { text: 'const proof = await ZiskProof.create({', delay: 1.5 },
  { text: '  type: "verification",', delay: 1.8 },
  { text: '  data: userData,', delay: 2.1 },
  { text: '  timestamp: Date.now()', delay: 2.4 },
  { text: '});', delay: 2.7 },
  { text: '', delay: 2.9 },
  { text: '// Proof generated in 0.3ms ✓', delay: 3.2 },
];

export const DeveloperSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev >= codeLines.length) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 300);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section id="developers" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={developerVisual} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text-reverse">Built for Developers</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Integrate real-time proofs into your application with our intuitive SDK. 
              Generate cryptographic proofs in milliseconds, not minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="neonGreen" size="lg" className="group">
                View Documentation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="neonPurple" size="lg">
                <Code className="w-4 h-4 mr-2" />
                Explore SDK
              </Button>
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-secondary/80" />
                <span className="ml-4 text-sm text-muted-foreground font-mono flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  zisk-terminal
                </span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm bg-background/50 min-h-[300px]">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={index < visibleLines ? { opacity: 1, x: 0 } : {}}
                    className={`${line.text.startsWith('$') ? 'text-secondary' : line.text.startsWith('//') ? 'text-secondary' : line.text.startsWith('import') ? 'text-accent' : 'text-foreground'} ${line.text === '' ? 'h-4' : ''}`}
                  >
                    {line.text}
                    {index === visibleLines - 1 && (
                      <span className="inline-block w-2 h-4 bg-secondary ml-1 animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-xl hidden md:block"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 border border-secondary/20 rounded-lg hidden md:block"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
