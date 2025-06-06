"use client"

const MoonLogo = ({ size = 60 }: { size?: number }) => {
  const PARTICLE_COUNT = 120;
  const RADIUS = size / 2 - 6;
  const CENTER = size / 2;
  const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const theta = (i / PARTICLE_COUNT) * Math.PI * 2;
    const x = CENTER + RADIUS * Math.cos(theta);
    const y = CENTER + RADIUS * Math.sin(theta) * 0.95;
    const dotSize = 1.1 + (i % 13 === 0 ? 0.7 : 0);
    const opacity = 0.6 + 0.4 * Math.abs(Math.cos(theta * 3));
    const animate = i % 20 === 0;
    return { x, y, dotSize, opacity, animate, i };
  });
  return (
    <div className="relative bg-transparent flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {PARTICLES.map(({ x, y, dotSize, opacity, animate, i }: { x: number; y: number; dotSize: number; opacity: number; animate: boolean; i: number }) =>
          animate ? (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={dotSize}
              fill="#fff"
              opacity={opacity}
            >
              <animate
                attributeName="r"
                values={`${dotSize};${dotSize * 1.3};${dotSize}`}
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.07}s`}
              />
              <animate
                attributeName="opacity"
                values={`${opacity};${opacity * 0.7};${opacity}`}
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.07}s`}
              />
            </circle>
          ) : (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={dotSize}
              fill="#fff"
              opacity={opacity}
            />
          )
        )}
      </svg>
    </div>
  );
};

export default MoonLogo;
