import React from 'react';
import { motion } from 'motion/react';
import profilePhoto from './image/profile_photo.jpg';
export default function PoetHero() {
  return (
    <section id="bio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        {/* Lotus Animation Container */}
        <div className="mb-12 relative flex justify-center items-center">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* Inline CSS for the sparkle animation to avoid typescript/hydration/interpolation issues with CSS variables */}
            <style>{`
              @keyframes custom-sparkle {
                0% {
                  transform: translateY(var(--sparkle-start)) scale(0);
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                  transform: translateY(calc((var(--sparkle-start) + var(--sparkle-end)) / 2)) scale(1.2);
                  filter: blur(0px);
                }
                100% {
                  transform: translateY(var(--sparkle-end)) scale(0);
                  opacity: 0;
                }
              }
              .sparkle-particle {
                animation: custom-sparkle 2.5s infinite ease-out;
              }
            `}</style>

            {/* Multiple layers of petals */}
            {[...Array(3)].map((_, layer) => {
              // Define sizes for each layer: [mobileWidth & height, tabletWidth & height, desktopWidth & height]
              const sizes = [
                ['w-[70px] h-[130px]', 'sm:w-[85px] sm:h-[160px]', 'md:w-[130px] md:h-[260px]'], // Layer 0 (outermost)
                ['w-[55px] h-[110px]', 'sm:w-[70px] sm:h-[135px]', 'md:w-[100px] md:h-[220px]'],  // Layer 1 (middle)
                ['w-[40px] h-[90px]', 'sm:w-[50px] sm:h-[110px]', 'md:w-[75px] md:h-[185px]']    // Layer 2 (innermost)
              ][layer];

              return (
                <div key={layer} className="absolute inset-0 flex items-center justify-center">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`${layer}-${i}`}
                      initial={{ rotate: i * 30, scale: 0, opacity: 0 }}
                      animate={{ scale: 1 - layer * 0.15, opacity: 0.9 }}
                      transition={{
                        delay: 0.2 + layer * 0.2 + i * 0.04,
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      style={{
                        position: 'absolute',
                        transformOrigin: 'bottom center',
                        bottom: '50%',
                        boxShadow: `0 0 ${15 - layer * 3}px rgba(212, 175, 55, 0.15)`,
                        border: '1px solid rgba(212, 175, 55, 0.08)',
                        zIndex: 10 - layer
                      }}
                      className={`petal-shimmer rounded-[50%_50%_40%_40%_/_80%_80%_20%_20%] backdrop-blur-[1px] ${sizes[0]} ${sizes[1]} ${sizes[2]}`}
                    />
                  ))}
                </div>
              );
            })}

            {/* Central Profile Photo inside circular border */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1, type: 'spring', damping: 15 }}
              className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-[280px] md:h-[280px] rounded-full z-20 flex items-center justify-center bg-[#151310] border-2 border-[var(--accent)] shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden"
            >
              <img
                src={profilePhoto}
                alt="Poet Profile"
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Golden particles bursting */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`sparkle-${i}`}
                style={{
                  position: 'absolute',
                  transform: `rotate(${i * 45}deg)`,
                }}
                className="w-0 h-0 flex items-center justify-center z-30"
              >
                <div
                  style={{
                    animationDelay: `${1.8 + i * 0.15}s`,
                  }}
                  className="sparkle-particle w-1.5 h-1.5 bg-[var(--accent)] rounded-full blur-[1px] [--sparkle-start:90px] [--sparkle-end:140px] sm:[--sparkle-start:120px] sm:[--sparkle-end:180px] md:[--sparkle-start:170px] md:[--sparkle-end:270px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="space-y-6 w-full"
        >
          <p className="text-base sm:text-lg md:text-xl font-serif italic tracking-wide golden-glow">
            શબ્દ અને સાધના
          </p>
          <div className="flex flex-col items-end w-full">
            {/* The Poetry Text */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-[var(--foreground)] tracking-tight leading-tight text-right w-full">
              ગઝલો ફક્ત લખાય છે દિલની જબાનમાં…
            </h1>

            {/* The Poet's Name */}
            <span className="mt-2 text-xl font-serif text-gray-600 dark:text-gray-400 italic">
              - ' મરીઝ '
            </span>
          </div>

          <div className="w-16 h-[1px] bg-[var(--accent)]/30 mx-auto" />
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--muted-foreground)] max-w-3xl mx-auto font-light leading-relaxed font-serif italic">
            "Enthusiast of Gujarati and Hindi literature, specializing in Ghazals."
          </p>
          <p className="text-sm md:text-base text-[var(--muted-foreground)]/80 max-w-2xl mx-auto leading-relaxed">
            સાહિત્ય મારી સાધના છે અને કવિતા હૃદયના ભાવોને વાચા આપવાનું ઉત્તમ માધ્યમ છે. ખાસ કરીને ગઝલ વિધામાં ભાવોની ગહનતા અને છંદોના લય સાથે માનવીય સંવેદનાઓને રજૂ કરવાનો નમ્ર પ્રયાસ કરું છું.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
