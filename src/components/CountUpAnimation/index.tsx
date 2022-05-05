import { useEffect, useState } from 'react';

const easeOutQuad = (t: number) => t * (2 - t);

export default function CountUpAnimation({ start = 0, end, duration = 2000, frameDuration = 1, decimal = 0 }
  : { start?: number, end: number, duration?: number, frameDuration?: number, decimal?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);

    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames);
      setCount(start + ((end - start) * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [duration, end, start, frameDuration]);

  return <span>{count.toLocaleString('en-US', { maximumFractionDigits: decimal })}</span>
};