const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      {/* MAIN CYAN FOCAL GLOW (LEFT TOP) */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-cyan-400/15 blur-[160px] animate-pulse" />

      {/* SECONDARY BLUE DEPTH GLOW (BOTTOM RIGHT) */}
      <div className="absolute bottom-[-140px] right-[-140px] w-[600px] h-[600px] bg-blue-500/15 blur-[180px] animate-pulse" />

      {/* CENTER SOFT AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-indigo-500/10 blur-[140px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* VERY SUBTLE BACKGROUND LIFT (OPTIONAL DEPTH) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

    </div>
  );
};

export default HeroBackground;