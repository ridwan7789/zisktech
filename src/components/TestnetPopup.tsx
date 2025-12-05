import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ziskLogo from "@/assets/zisk-logo.png";

interface TestnetPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestnetPopup = ({ isOpen, onClose }: TestnetPopupProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-md bg-gradient-to-br from-background to-muted rounded-2xl p-8 border border-border/30 shadow-2xl"
          initial={{ scale: 0.8, rotateX: 15, rotateY: 15 }}
          animate={{
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0.5
          }}
          exit={{
            scale: 0.8,
            rotateX: 15,
            rotateY: 15,
            opacity: 0
          }}
          transition={{ type: "spring", damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 3D Effect Elements */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl opacity-50" />
          <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          {/* Content */}
          <div className="text-center space-y-6 py-8">
            <motion.div
              className="relative mx-auto w-24 h-24"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src={ziskLogo}
                    alt="Zisk Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                className="text-3xl font-bold text-foreground"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Testnet Application
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Coming Soon
              </motion.p>

              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />

              {/* Progress Bar */}
              <div className="w-full max-w-xs mx-auto">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>80%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Building toward launch
                </div>
              </div>

              <motion.p
                className="text-muted-foreground max-w-md mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                The testnet application is currently under development and will be available soon. Stay tuned for updates!
              </motion.p>
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
              >
                Close
              </button>
            </motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() > 0.5 ? 10 : -10, 0],
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TestnetPopup;