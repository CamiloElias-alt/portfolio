import { useEffect, useMemo, useState } from 'react';
import './StarsBackground.css';

const STAR_COUNT = 120;

function StarsBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.3,
      })),
    [],
  );

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!window.innerWidth || !window.innerHeight) return;
      const xNorm = event.clientX / window.innerWidth - 0.5;
      const yNorm = event.clientY / window.innerHeight - 0.5;

      const strength = 28; // intensidad máx. del movimiento en px
      setOffset({
        x: xNorm * strength,
        y: yNorm * strength,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="stars-background"
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;

