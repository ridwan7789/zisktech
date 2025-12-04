import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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

        <div className="max-w-4xl mx-auto perspective-1000">
          <div className="relative">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -50, rotateX: -20 }}
                animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative mb-4 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${(3 - index) * 20}px)`,
                }}
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.02 : 1,
                    y: hoveredIndex === index ? -5 : 0,
                  }}
                  className={`relative rounded-2xl p-6 bg-gradient-to-r ${layer.color} bg-opacity-20 backdrop-blur-sm border border-border/30 transition-all duration-300 ${hoveredIndex === index ? 'glow-border shadow-lg' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1">
                        {layer.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {layer.description}
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${layer.color} ${hoveredIndex === index ? 'animate-pulse' : ''}`} />
                  </div>
                  
                  {/* Connector Line */}
                  {index < layers.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 -bottom-4 w-px h-4"
                      style={{
                        background: 'linear-gradient(to bottom, hsl(var(--neon-purple)), hsl(var(--neon-green)))',
                      }}
                      animate={{
                        opacity: hoveredIndex === index || hoveredIndex === index + 1 ? 1 : 0.3,
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}

            {/* Floating Chip Decorations */}
            <motion.div
              className="absolute -right-20 top-10 w-16 h-16 border border-secondary/30 rounded-lg rotate-12"
              animate={{ y: [0, -10, 0], rotate: [12, 20, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -left-16 bottom-20 w-12 h-12 border border-primary/30 rounded-lg -rotate-12"
              animate={{ y: [0, 10, 0], rotate: [-12, -20, -12] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
