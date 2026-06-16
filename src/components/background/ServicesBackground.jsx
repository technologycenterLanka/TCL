const ServicesBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      {/* MAIN CYAN FOCAL GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-cyan-400/20 blur-[160px] animate-pulse" />

      {/* BLUE DEPTH GLOW */}
      <div className="absolute bottom-[-180px] right-[-180px] w-[700px] h-[700px] bg-blue-500/20 blur-[180px] animate-pulse" />

      {/* SOFT CENTER AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* VERY SUBTLE DARK OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

    </div>
  );
};

export default ServicesBackground;