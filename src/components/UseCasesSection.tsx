import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Gamepad2, Coins, Brain } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: 'SocialFi',
    description: 'Verified social interactions and reputation systems for decentralized social platforms.',
    gradient: 'from-secondary/20 to-primary/20',
  },
  {
    icon: Gamepad2,
    title: 'GameFi',
    description: 'Real-time proof of achievements, asset ownership, and anti-cheat verification.',
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    icon: Coins,
    title: 'DeFi',
    description: 'Instant transaction verification and proof of reserves for financial protocols.',
    gradient: 'from-accent/20 to-secondary/20',
  },
  {
    icon: Brain,
    title: 'AI Systems',
    description: 'Verification of AI model outputs and proof of computation integrity.',
    gradient: 'from-neon-soft/20 to-primary/20',
  },
];

export const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powering Web3</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From gaming to finance, Zisk Tech enables trustless verification across all Web3 verticals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`glass-card h-full p-6 bg-gradient-to-br ${useCase.gradient} hover:glow-border transition-all duration-500`}>
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-card/50 flex items-center justify-center mb-6 mx-auto border border-border/50 group-hover:border-secondary/50 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <useCase.icon className="w-8 h-8 text-secondary group-hover:text-glow transition-all" />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-center mb-3 text-foreground group-hover:text-secondary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
