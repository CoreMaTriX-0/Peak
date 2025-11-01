import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
}

interface ClickSparkProps {
  children: React.ReactNode;
  sparkCount?: number;
  sparkColor?: string;
  sparkSize?: number;
}

export const ClickSpark = ({
  children,
  sparkCount = 8,
  sparkColor = "#FFC107",
  sparkSize = 10,
}: ClickSparkProps) => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }));

    setSparks((prev) => [...prev, ...newSparks]);
  };

  useEffect(() => {
    if (sparks.length > 0) {
      const timer = setTimeout(() => {
        setSparks((prev) => prev.slice(sparkCount));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [sparks, sparkCount]);

  return (
    <div onClick={handleClick} className="relative inline-block cursor-pointer">
      {children}
      <AnimatePresence>
        {sparks.map((spark, index) => {
          const angle = (360 / sparkCount) * index;
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

export default ClickSpark;
