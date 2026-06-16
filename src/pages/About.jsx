import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/background/ParticlesBackground";
import ServicesBackground from "../components/background/ServicesBackground";
import logo from "../assets/logos/abe-logo.png";

const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "18+", label: "Business Clients" },
  { value: "6", label: "Service Areas" },
  { value: "24h", label: "Response Target" },
];

const projects = [
  {
    title: "Business Management Portal",
    category: "Software Development",
    description:
      "A custom dashboard for managing customers, service requests, and daily operations from one place.",
  },
  {
    title: "Cloud Office Setup",
    category: "Cloud Solutions",
    description:
      "Secure cloud migration, email setup, backups, and shared workspaces for a growing team.",
  },
  {
    title: "Digital Growth Campaign",
    category: "Marketing Services",
    description:
      "Brand content, social media planning, and lead-generation support for improved customer reach.",
  },
];

const reviews = [
  {
    quote:
      "The team understood our business quickly and delivered a practical system that made our operations easier to manage.",
    name: "Operations Manager",
    company: "Local Services Company",
  },
  {
    quote:
      "Atlantic Bridge helped us improve our online presence and communicate more professionally with customers.",
    name: "Business Owner",
    company: "Retail Brand",
  },
  {
    quote:
      "Their support was clear, responsive, and focused on solutions that actually fit our workflow.",
    name: "Finance Lead",
    company: "SME Client",
  },
];

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <ParticlesBackground />
      <ServicesBackground />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl font-extrabold md:text-6xl">
            About <span className="text-cyan-400">Us</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            We build modern, scalable, and intelligent technology solutions
            that empower businesses to grow without limits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid items-center gap-10 md:grid-cols-2"
        >
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-cyan-400">Our Story</h2>

            <p className="leading-relaxed text-slate-300">
              Atlantic Bridge Exchange was founded to bridge the gap between
              business and technology through scalable systems, AI solutions,
              enterprise infrastructure, marketing support, and accounts
              services.
            </p>

            <p className="text-slate-400">
              We help startups and established businesses modernize their
              operations with practical, future-ready solutions.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="absolute inset-0 h-[100px] w-[100px] rounded-full bg-cyan-300/20 blur-[120px]"
              />

              <motion.img
                src={logo}
                alt="Atlantic Bridge Exchange logo"
                initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                animate={{ y: [0, -10, 0] }}
                className="relative z-10 w-[600px] object-contain md:w-[800px]"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-lg border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-md"
            >
              <p className="text-3xl font-extrabold text-cyan-300">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Project Showcase
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Work That Builds Customer Confidence
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              A quick look at the kind of practical business solutions we
              create for technology, marketing, and operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-lg border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-md"
          >
            <h3 className="mb-3 text-xl font-bold text-cyan-400">
              Our Mission
            </h3>
            <p className="text-slate-300">
              Deliver scalable, intelligent solutions that remove limitations
              for businesses and help teams work with more clarity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-lg border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-md"
          >
            <h3 className="mb-3 text-xl font-bold text-cyan-400">
              Our Vision
            </h3>
            <p className="text-slate-300">
              Become a trusted transformation partner for companies that want
              technology, marketing, and operations to move together.
            </p>
          </motion.div>
        </div>

        <div className="mb-20">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Customer Reviews
            </p>
            <h2 className="mt-3 text-3xl font-bold">What Clients Value</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md"
              >
                <p className="text-sm leading-6 text-slate-300">
                  "{review.quote}"
                </p>
                <div className="mt-5 border-t border-slate-800 pt-4">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-cyan-300">{review.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold">
            Let's Build Something Great
          </h2>

          <Link
            to="/contact"
            className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-medium transition hover:bg-cyan-400"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
