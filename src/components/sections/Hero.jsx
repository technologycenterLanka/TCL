const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-cyan-400 uppercase tracking-widest">
          Atlantic Bridge Exchange
        </span>

        <h1 className="mt-6 text-6xl md:text-7xl font-bold">
          Bridging Innovation
          <br />
          Through Technology
        </h1>

        <p className="mt-6 max-w-2xl text-slate-300 text-lg">
          Delivering modern IT Support, Web Development,
          Android Applications, AI Solutions and Networking
          services for businesses worldwide.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-cyan-500 rounded-xl font-semibold">
            Get Started
          </button>

          <button className="px-6 py-3 border border-slate-600 rounded-xl">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;