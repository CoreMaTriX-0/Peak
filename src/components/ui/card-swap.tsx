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
  width = 500,
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    
    // Reduce distances on mobile
    const mobileCardDistance = isMobile ? cardDistance * 0.3 : cardDistance;
    const mobileVerticalDistance = isMobile ? verticalDistance * 0.3 : verticalDistance;
    
    return {
      zIndex: images.length - position,
      x: position * mobileCardDistance,
      y: position * mobileVerticalDistance,
      scale: 1 - position * 0.05,
      opacity: position < 3 ? 1 : 0,
      rotateZ: isTop ? 0 : position * (isMobile ? skewAmount * 0.5 : skewAmount),
    };
  };

  const transitionConfig = easing === 'elastic' 
    ? { type: 'spring' as const, stiffness: 200, damping: 30, mass: 0.8 }
    : { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const };

  // Responsive dimensions
  const responsiveWidth = typeof width === 'number' 
    ? isMobile ? '100%' : `${width}px` 
    : width;
  const responsiveHeight = typeof height === 'number' 
    ? isMobile ? 'auto' : `${height}px` 
    : height;

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: responsiveWidth,
        height: responsiveHeight,
        aspectRatio: isMobile ? '4/3' : undefined,
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={() => pauseOnHover && setIsPaused(true)}
      onTouchEnd={() => pauseOnHover && setIsPaused(false)}
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
