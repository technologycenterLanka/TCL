import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/background/ParticlesBackground";
import ServicesBackground from "../components/background/ServicesBackground";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setCredentials((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login submitted successfully!");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <ParticlesBackground />
      <ServicesBackground />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_440px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Admin Portal
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Secure access for Atlantic
              <span className="text-cyan-400">Bridge</span> teams.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              Sign in to manage exchange workflows, client updates, and
              operational activity from one protected workspace.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg border border-cyan-500/20 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:p-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Welcome back</h2>
              <p className="mt-2 text-sm text-slate-400">
                Enter your credentials to continue.
              </p>
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="admin@atlanticbridge.com"
                  className="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </label>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-slate-300">
                <input
                  type="checkbox"
                  name="remember"
                  checked={credentials.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 accent-cyan-500"
                />
                Remember me
              </label>

              <button
                type="button"
                className="font-medium text-cyan-300 transition hover:text-cyan-200"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:shadow-cyan-500/40"
            >
              Sign in
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Login;
