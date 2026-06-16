import HeroBackground from "../background/HeroBackground";
import ParticlesBackground from "../background/ParticlesBackground";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* BACKGROUND */}
      <HeroBackground />
      <ParticlesBackground />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
          <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-medium">
            Technology Solutions Partner
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          Bridging the Gap
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            Between Vision
          </span>{" "}
          & Technology
        </h1>

        <p className="mt-10 max-w-3xl text-xl text-slate-400 leading-relaxed">
          Atlantic Bridge Exchange delivers enterprise-grade IT infrastructure,
          custom software, AI-powered systems, and seamless networking
          solutions.
        </p>

        <div className="mt-10 flex gap-3">
          <Link
            to="/login"
            className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2.5 rounded-lg"
          >
            Get Started
          </Link>

          <Link
            to="/services"
            className="border border-slate-700 hover:border-cyan-400 px-5 py-2.5 rounded-lg"
          >
            Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
