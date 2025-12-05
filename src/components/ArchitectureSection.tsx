import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import architectureLayers from '@/assets/architecture-layers.png';

const layers = [
  { name: 'Zisk Application Layer', color: 'from-secondary to-secondary/70', description: 'User-facing applications and dApps' },
  { name: 'Zisk Network Layer', color: 'from-accent to-accent/70', description: 'Decentralized communication protocol' },
  { name: 'Zisk Proof Engine (ZPE)', color: 'from-primary to-primary/70', description: 'Core cryptographic proof generation' },
  { name: 'Zisk Node Layer', color: 'from-neon-soft to-primary/50', description: 'Distributed node infrastructure' },
];

export const ArchitectureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-reverse">Multi-Layer Proof Architecture</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A revolutionary stacked architecture designed for maximum scalability and security.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 3D Architecture Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <motion.img 
              src={architectureLayers} 
              alt="Architecture Layers" 
              className="w-full max-w-md mx-auto"
              animate={{ y: [0, -10, 0], rotateY: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl -z-10" />
          </motion.div>

          {/* Layer Cards */}
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative cursor-pointer"
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.02 : 1,
                    x: hoveredIndex === index ? 10 : 0,
                  }}
                  className={`relative rounded-2xl p-5 bg-gradient-to-r ${layer.color} bg-opacity-20 backdrop-blur-sm border border-border/30 transition-all duration-300 ${hoveredIndex === index ? 'glow-border shadow-lg' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        {layer.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {layer.description}
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${layer.color} ${hoveredIndex === index ? 'animate-pulse' : ''}`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
