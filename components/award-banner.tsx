"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AwardBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container mx-auto px-4 pt-4">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="relative overflow-hidden rounded-2xl bg-linear-to-r from-yellow-400 via-amber-500 to-orange-500 shadow-2xl pointer-events-auto"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-yellow-300/30 via-transparent to-orange-300/30"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative flex items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-4 flex-1">
                {/* Trophy icon with animation */}
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="shrink-0"
                >
                  <div className="relative">
                    <Trophy className="h-10 w-10 text-white drop-shadow-lg" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 bg-white rounded-full blur-xl"
                    />
                  </div>
                </motion.div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 mb-1"
                  >
                    <Sparkles className="h-4 w-4 text-white" />
                    <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md">
                      Rookie of the Year 2024
                    </h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm md:text-base text-white/95 drop-shadow"
                  >
                    Awarded for exceptional contributions and outstanding performance at PickYourTrail
                  </motion.p>
                </div>
              </div>

              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsVisible(false)}
                className="shrink-0 hover:bg-white/20 text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Animated border shine effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
