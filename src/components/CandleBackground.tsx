import { useEffect, useRef } from 'react';

export function CandleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing candles
    container.innerHTML = '';

    // Generate candles
    for (let i = 0; i < 40; i++) {
      const candle = document.createElement('div');
      candle.classList.add('candle');
      
      // Randomly pick red/green
      if (Math.random() > 0.5) {
        candle.classList.add('candle-red');
      } else {
        candle.classList.add('candle-green');
      }

      candle.style.left = `${Math.random() * 100}vw`;
      candle.style.height = `${20 + Math.random() * 80}px`;
      candle.style.animationDuration = `${3 + Math.random() * 4}s`;
      candle.style.animationDelay = `${Math.random() * 5}s`;
      candle.style.opacity = `${0.3 + Math.random() * 0.4}`;

      container.appendChild(candle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 gradient-glow opacity-50 pointer-events-none" aria-hidden="true" />
    </>
  );
}
