import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  separator?: string;
  decimals?: number;
  decimal?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  onComplete?: () => void;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  separator = ',',
  decimals = 0,
  decimal = '.',
  prefix = '',
  suffix = '',
  className = '',
  onComplete
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Easing function (easeOutExpo)
      const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
      const easedProgress = easeOutExpo(progress);

      const currentCount = from + (to - from) * easedProgress;
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(to);
        onComplete?.();
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, from, to, duration, onComplete]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    const [integer, fraction] = fixed.split('.');

    // Add thousand separators
    const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    // Combine integer and fraction parts
    const formattedNumber = fraction ? `${formattedInteger}${decimal}${fraction}` : formattedInteger;

    return `${prefix}${formattedNumber}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {formatNumber(count)}
    </span>
  );
}

export default CountUp;
