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
            className="relative overflow-hidden rounded-2xl bg-linear-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-2xl shadow-purple-500/50 pointer-events-auto border border-purple-400/30"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-400/30 via-blue-400/30 to-indigo-400/30"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Radial glow effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-white/10 to-transparent"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
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
                    <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md opacity-60" />
                    <Trophy className="relative h-10 w-10 text-yellow-300 drop-shadow-2xl" />
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 bg-yellow-200 rounded-full blur-xl"
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
              className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-20"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: "50%",
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
