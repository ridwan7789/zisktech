import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Clock } from 'lucide-react';
import roadmapVisual from '@/assets/roadmap-visual.png';

const milestones = [
  {
    quarter: 'Q1 2025',
    title: 'Foundation',
    items: ['Core protocol design', 'Proof Engine prototype'],
    status: 'completed',
  },
  {
    quarter: 'Q2 2026',
    title: 'Testnet Launch',
    items: ['Public testnet', 'Developer SDK release'],
    status: 'current',
  },
  {
    quarter: 'Q3 2026',
    title: 'Mainnet v1',
    items: ['Mainnet launch', 'Real-Time Proof Marketplace'],
    status: 'upcoming',
  },
  {
    quarter: 'Q4 2026',
    title: 'Expansion',
    items: ['AI Verification Module', 'SocialFi Module', 'Cross-chain integration'],
    status: 'upcoming',
  },
  {
    quarter: 'Q5 2026',
    title: 'Global Scale',
    items: ['Enterprise adoption', 'DAO formation', 'Global expansion'],
    status: 'upcoming',
  },
];

export const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <img 
          src={roadmapVisual} 
          alt="" 
          className="w-full max-w-4xl object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our journey to revolutionize Web3 verification infrastructure.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              className="h-full"
              style={{
                background: 'linear-gradient(to bottom, hsl(var(--neon-green)), hsl(var(--neon-purple)), hsl(var(--neon-green)))',
                transformOrigin: 'top',
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.quarter}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 rounded-full ${
                    milestone.status === 'completed' 
                      ? 'bg-secondary glow-green' 
                      : milestone.status === 'current' 
                      ? 'bg-primary animate-pulse glow-purple' 
                      : 'bg-muted border-2 border-border'
                  }`}
                />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
              >
                <div className={`glass-card p-6 ${milestone.status === 'current' ? 'glow-border' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === 'completed' 
                        ? 'bg-secondary/20 text-secondary' 
                        : milestone.status === 'current' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {milestone.quarter}
                    </span>
                    {milestone.status === 'completed' && <Check className="w-4 h-4 text-secondary" />}
                    {milestone.status === 'current' && <Clock className="w-4 h-4 text-primary animate-pulse" />}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {milestone.title}
                  </h3>
                  <ul className="space-y-2">
                    {milestone.items.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          milestone.status === 'completed' ? 'bg-secondary' : 'bg-primary/50'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
