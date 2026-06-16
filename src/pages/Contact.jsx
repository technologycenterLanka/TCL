import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/background/ParticlesBackground";
import ServicesBackground from "../components/background/ServicesBackground";

const infoItems = [
  {
    label: "Office",
    value: "Colombo, Sri Lanka",
    icon: "location",
  },
  {
    label: "Email",
    value: "contact@atlanticbridge.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+94 XXX XXX XXX",
    icon: "phone",
  },
];

const ContactIcon = ({ type }) => {
  const icons = {
    location: (
      <>
        <path d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z" />
        <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    email: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M6.6 3.8 4 6.4c.4 7.1 6.1 12.8 13.2 13.2l2.6-2.6-4.1-4.1-2.5 1.8a11.6 11.6 0 0 1-4.9-4.9l1.8-2.5-3.5-3.5Z" />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isQuoteRequest = searchParams.get("request") === "quote";
  const initialMessage = isQuoteRequest
    ? "I would like to request a quote for "
    : "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: initialMessage,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    const apiUrl = import.meta.env.VITE_API_URL || '';

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: isQuoteRequest ? "Quote Request" : "General Inquiry",
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccessMessage(
        isQuoteRequest
          ? "Quote request sent successfully!"
          : "Message sent successfully!"
      );
      setForm({ name: "", email: "", message: initialMessage });
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
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-extrabold md:text-6xl">
            {isQuoteRequest ? "Request a" : "Contact"}{" "}
            <span className="text-cyan-400">
              {isQuoteRequest ? "Quote" : "Us"}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            {isQuoteRequest
              ? "Tell us what your business needs and we will prepare a clear project estimate."
              : "Have a project in mind? Let's build something amazing together. We usually respond within 24 hours."}
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="mb-2 text-2xl font-bold text-cyan-400">
                {isQuoteRequest ? "Quote Details" : "Get in Touch"}
              </h2>
              <p className="text-slate-400">
                {isQuoteRequest
                  ? "Share your service interest, timeline, and budget range if available."
                  : "Fill out the form and we'll get back to you shortly."}
              </p>
            </div>

            <div className="space-y-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 text-slate-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-500/10 text-cyan-300">
                    <ContactIcon type={item.icon} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="block text-sm text-slate-200">
                      {item.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-sm text-slate-400">We specialize in:</p>
              <p className="mt-2 text-cyan-400">
                AI Systems, Web Apps, Cloud Infrastructure, Enterprise
                Solutions, Marketing, and Accounts Services
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {error && <div className="rounded border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">{error}</div>}
            {successMessage && <div className="rounded border border-green-500 bg-green-500/10 p-3 text-sm text-green-400">{successMessage}</div>}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-white/5 p-3 outline-none focus:border-cyan-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-white/5 p-3 outline-none focus:border-cyan-400"
              required
            />

            <textarea
              name="message"
              placeholder={
                isQuoteRequest
                  ? "Tell us what service you need a quote for"
                  : "Your Message"
              }
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-white/5 p-3 outline-none focus:border-cyan-400"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded-lg py-3 font-medium shadow-lg transition ${isLoading ? "bg-cyan-500/50 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-400 hover:shadow-cyan-500/40"}`}
            >
              {isLoading ? "Sending..." : (isQuoteRequest ? "Request Quote" : "Send Message")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
