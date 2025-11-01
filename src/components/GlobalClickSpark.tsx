import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
}

interface GlobalClickSparkProps {
  sparkCount?: number;
  sparkColor?: string;
  sparkSize?: number;
}

export const GlobalClickSpark = ({
  sparkCount = 8,
  sparkColor = "#FBBF24",
  sparkSize = 10,
}: GlobalClickSparkProps) => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
        id: Date.now() + i + Math.random(),
        x,
        y,
      }));

      setSparks((prev) => [...prev, ...newSparks]);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [sparkCount]);

  useEffect(() => {
    if (sparks.length > 0) {
      const timer = setTimeout(() => {
        setSparks((prev) => prev.slice(sparkCount));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [sparks, sparkCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {sparks.map((spark, index) => {
          const sparkIndex = index % sparkCount;
          const angle = (360 / sparkCount) * sparkIndex;
          const distance = 40 + Math.random() * 20;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * distance;
          const y = Math.sin(radian) * distance;

          return (
            <motion.div
              key={spark.id}
              initial={{
                x: spark.x,
                y: spark.y,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: spark.x + x,
                y: spark.y + y,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute pointer-events-none"
              style={{
                width: sparkSize,
                height: sparkSize,
                backgroundColor: sparkColor,
                borderRadius: "50%",
                boxShadow: `0 0 ${sparkSize}px ${sparkColor}`,
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default GlobalClickSpark;
