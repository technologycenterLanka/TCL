import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/background/ParticlesBackground";
import ServicesBackground from "../components/background/ServicesBackground";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setCredentials((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const apiUrl = import.meta.env.VITE_API_URL || '';

    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store token
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email }));
      
      setSuccess(true);
      
      setTimeout(() => {
        alert(`Welcome, ${data.name}! Your account has been created.`);
        navigate('/');
      }, 1000);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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
              Create Account
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Join Atlantic
              <span className="text-cyan-400">Bridge</span> today.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              Sign up to unlock access to our exchange platform and start your journey with us.
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
              <h2 className="text-2xl font-bold text-white">Sign up</h2>
              <p className="mt-2 text-sm text-slate-400">
                Fill in your details to create an account.
              </p>
            </div>

            {error && <div className="mb-4 rounded border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">{error}</div>}
            {success && <div className="mb-4 rounded border border-green-500 bg-green-500/10 p-3 text-sm text-green-400">Registration successful! Redirecting...</div>}

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </label>

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
                  minLength={6}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || success}
              className={`mt-8 w-full rounded-lg px-5 py-3 font-semibold text-white shadow-lg transition ${isLoading || success ? "bg-cyan-500/50 cursor-not-allowed" : "bg-cyan-500 shadow-cyan-500/20 hover:bg-cyan-400 hover:shadow-cyan-500/40"}`}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
            
            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-400 hover:underline">
                Sign in here
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Register;
