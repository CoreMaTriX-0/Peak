import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardSwapProps {
  images: string[];
  interval?: number;
  className?: string;
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
}

const CardSwap = ({ 
  images, 
  interval = 5000,
  className = '',
  width = 200,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  skewAmount = 5,
  easing = 'elastic'
}: CardSwapProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused && pauseOnHover) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(timer);
  }, [images.length, delay, isPaused, pauseOnHover]);

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + images.length) % images.length;
    const isTop = position === 0;
    
    return {
      zIndex: images.length - position,
      x: position * cardDistance,
      y: position * verticalDistance,
      scale: 1 - position * 0.05,
      opacity: position < 3 ? 1 : 0,
      rotateZ: isTop ? 0 : position * skewAmount,
    };
  };

  const transitionConfig = easing === 'elastic' 
    ? { type: 'spring' as const, stiffness: 200, damping: 30, mass: 0.8 }
    : { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const };

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {images.map((image, index) => {
        const style = getCardStyle(index);
        const position = (index - currentIndex + images.length) % images.length;
        
        return (
          <motion.div
            key={`${image}-${index}`}
            initial={false}
            animate={style}
            transition={transitionConfig}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transformOrigin: 'center center',
            }}
            className={position < 3 ? '' : 'pointer-events-none'}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardSwap;
