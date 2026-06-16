const PARTICLES = Array.from({ length: 60 }, (_, index) => ({
  size: ((index * 7) % 4) + 2,
  left: (index * 37) % 100,
  top: (index * 53) % 100,
  duration: ((index * 11) % 8) + 4,
}));

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-cyan-300/60 animate-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
