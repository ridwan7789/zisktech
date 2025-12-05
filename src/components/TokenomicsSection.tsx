import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coins, Lock, Vote, Flame, TrendingUp, Shield } from "lucide-react";

const tokenUtilities = [
  { icon: Coins, text: "Paying proof generation fees" },
  { icon: Lock, text: "Node staking" },
  { icon: Vote, text: "Governance voting" },
  { icon: TrendingUp, text: "Accessing premium modules" },
  { icon: Shield, text: "Incentives for proof verifiers" },
  { icon: Flame, text: "Anti-bot stake requirement" },
];

const distribution = [
  { label: "Liquidity", percentage: 50, color: "from-zisk-green to-emerald-400" },
  { label: "Ecosystem & Grants", percentage: 20, color: "from-zisk-purple to-violet-400" },
  { label: "Staking Rewards", percentage: 15, color: "from-zisk-accent to-blue-400" },
  { label: "Team & Advisors", percentage: 5, color: "from-pink-500 to-rose-400" },
  { label: "Foundation", percentage: 5, color: "from-amber-500 to-orange-400" },
  { label: "Partnerships", percentage: 5, color: "from-cyan-500 to-teal-400" },
];

const TokenomicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tokenomics" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-wider uppercase mb-4 block">
            Tokenomics
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">ZISK</span> Token
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A deflationary token powering the Zisk ecosystem with fee-burning mechanics and staking rewards
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Token Utility */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass rounded-2xl p-8 h-full neon-border">
              <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                Token Utility
              </h3>
              <div className="grid gap-4">
                {tokenUtilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Token Model Info */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <h4 className="font-display font-semibold text-foreground mb-4">Token Model</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-destructive" />
                    Deflationary model with fee-burning mechanism
                  </p>
                  <p className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Staking yield based on proof demand
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Token Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-glass rounded-2xl p-8 h-full neon-border">
              <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                Token Distribution
              </h3>

              {/* Visual Chart */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {distribution.reduce((acc, item, index) => {
                    const offset = acc.offset;
                    const circumference = 2 * Math.PI * 40;
                    const strokeDash = (item.percentage / 100) * circumference;

                    acc.elements.push(
                      <motion.circle
                        key={item.label}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        strokeWidth="12"
                        stroke={`url(#gradient-${index})`}
                        strokeDasharray={`${strokeDash} ${circumference}`}
                        strokeDashoffset={-offset}
                        initial={{ strokeDasharray: `0 ${circumference}` }}
                        animate={isInView ? { strokeDasharray: `${strokeDash} ${circumference}` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    );
                    acc.offset += strokeDash;
                    return acc;
                  }, { elements: [] as React.ReactNode[], offset: 0 }).elements}

                  <defs>
                    {distribution.map((item, index) => (
                      <linearGradient key={index} id={`gradient-${index}`}>
                        <stop offset="0%" stopColor={
                          index === 0 ? 'hsl(var(--secondary))' :
                          index === 1 ? 'hsl(var(--primary))' :
                          index === 2 ? 'hsl(var(--accent))' :
                          index === 3 ? '#f472b6' : // pink-500
                          index === 4 ? '#f59e0b' : // amber-500
                          index === 5 ? '#06b6d4' : // cyan-500
                          'hsl(var(--secondary))'
                        } />
                        <stop offset="100%" stopColor={
                          index === 0 ? 'hsl(var(--secondary))' :
                          index === 1 ? 'hsl(var(--primary))' :
                          index === 2 ? 'hsl(var(--accent))' :
                          index === 3 ? '#f43f5e' : // rose-500
                          index === 4 ? '#ea580c' : // orange-500
                          index === 5 ? '#0891b2' : // teal-500
                          'hsl(var(--secondary))'
                        } />
                      </linearGradient>
                    ))}
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <img src="/src/assets/zisk-logo.png" alt="ZISK Token" className="w-16 h-16 rounded-full object-cover mx-auto mb-2" />
                    <div className="font-display text-lg font-bold text-primary">ZISK</div>
                  </div>
                </div>
              </div>

              {/* Distribution List */}
              <div className="grid grid-cols-2 gap-3">
                {distribution.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-semibold text-foreground ml-auto">{item.percentage}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { TokenomicsSection };