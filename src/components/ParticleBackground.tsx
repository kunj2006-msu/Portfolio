import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; left: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          initial={{ bottom: '-10%', left: p.left, opacity: 0 }}
          animate={{
            bottom: '110%',
            left: `calc(${p.left} + ${Math.random() * 100 - 50}px)`,
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: '#d4af37',
            boxShadow: '0 0 10px #f4d03f',
          }}
        />
      ))}
    </div>
  );
}
