import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Coins, Lock, Vote, Sparkles, Shield, Bot } from 'lucide-react';
import tokenVisual from '@/assets/token-visual.png';

const distribution = [
  { name: 'Liquidity', percentage: 50, color: 'hsl(160, 100%, 48%)' },
  { name: 'Ecosystem', percentage: 20, color: 'hsl(252, 100%, 55%)' },
  { name: 'Staking', percentage: 15, color: 'hsl(252, 100%, 74%)' },
  { name: 'Team', percentage: 5, color: 'hsl(200, 100%, 50%)' },
  { name: 'Foundation', percentage: 5, color: 'hsl(280, 100%, 60%)' },
  { name: 'Partnerships', percentage: 5, color: 'hsl(320, 100%, 50%)' },
];

const utilities = [
  { icon: Coins, title: 'Proof Generation Fees', description: 'Pay for proof creation' },
  { icon: Lock, title: 'Node Staking', description: 'Stake to run validator nodes' },
  { icon: Vote, title: 'Governance', description: 'Vote on protocol decisions' },
  { icon: Sparkles, title: 'Premium Modules', description: 'Access advanced features' },
  { icon: Shield, title: 'Verifier Incentives', description: 'Earn for verification' },
  { icon: Bot, title: 'Anti-Bot Staking', description: 'Prevent spam attacks' },
];

export const TokenomicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  // Calculate pie chart segments
  let cumulativePercentage = 0;
  const segments = distribution.map((item, index) => {
    const startAngle = (cumulativePercentage / 100) * 360;
    cumulativePercentage += item.percentage;
    const endAngle = (cumulativePercentage / 100) * 360;
    
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    
    const largeArcFlag = item.percentage > 50 ? 1 : 0;
    
    const x1 = 100 + 80 * Math.cos(startRad);
    const y1 = 100 + 80 * Math.sin(startRad);
    const x2 = 100 + 80 * Math.cos(endRad);
    const y2 = 100 + 80 * Math.sin(endRad);
    
    return {
      ...item,
      path: `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`,
      index,
    };
  });

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-reverse">ZISK Tokenomics</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A deflationary token model designed for sustainable growth and community alignment.
          </p>
        </motion.div>

        {/* Token Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <motion.img 
            src={tokenVisual} 
            alt="ZISK Token" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <h3 className="font-heading text-2xl font-bold mb-6 text-foreground text-center">
              Token Distribution
            </h3>
            <div className="relative w-64 h-64 mx-auto">
              <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                {segments.map((segment) => (
                  <motion.path
                    key={segment.name}
                    d={segment.path}
                    fill={segment.color}
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: hoveredSegment === segment.index ? 1.05 : 1 } : {}}
                    transition={{ delay: 0.5 + segment.index * 0.1, duration: 0.4 }}
                    onMouseEnter={() => setHoveredSegment(segment.index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                    className="cursor-pointer transition-all duration-300"
                    style={{
                      filter: hoveredSegment === segment.index ? 'drop-shadow(0 0 10px ' + segment.color + ')' : 'none',
                      transformOrigin: 'center',
                    }}
                  />
                ))}
              </svg>
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-heading text-2xl font-bold gradient-text">ZISK</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {distribution.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-all ${hoveredSegment === index ? 'bg-card/50' : ''}`}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name} <span className="text-foreground font-semibold">{item.percentage}%</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Utilities */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-6 text-foreground text-center lg:text-left">
              Token Utility
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {utilities.map((utility, index) => (
                <motion.div
                  key={utility.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 group cursor-pointer"
                >
                  <utility.icon className="w-6 h-6 text-secondary mb-2 group-hover:text-glow transition-all" />
                  <h4 className="font-semibold text-sm text-foreground mb-1">{utility.title}</h4>
                  <p className="text-xs text-muted-foreground">{utility.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
