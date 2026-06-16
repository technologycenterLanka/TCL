import { motion } from "framer-motion";
import ServiceCard from "../components/ui/ServiceCard";
import ServicesBackground from "../components/background/ServicesBackground";
import ParticlesBackground from "../components/background/ParticlesBackground";

const services = [
  {
    title: "IT Infrastructure",
    description:
      "Reliable enterprise systems, workstations, servers, and architecture designed to keep daily operations stable and secure.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern server infrastructure",
  },
  {
    title: "Software Development",
    description:
      "Custom web platforms, business portals, and mobile-ready applications built around your team's real workflow.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Developer workspace with code",
  },
  {
    title: "AI & Automation",
    description:
      "Smart business systems that reduce manual effort, connect data, and help teams make faster operational decisions.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Artificial intelligence visualization",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure cloud hosting, migration, backups, and scalable environments for growing digital products and services.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Global cloud network lights",
  },
  {
    title: "Marketing Services",
    description:
      "Digital campaigns, brand content, social media strategy, and lead generation support that helps attract new customers.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Marketing analytics dashboard",
  },
  {
    title: "Accounts Services",
    description:
      "Bookkeeping support, invoice tracking, financial reports, and account management services for clearer business control.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Accounting documents and calculator",
  },
  {
    title: "Networking",
    description:
      "High-speed wired and wireless networks, device setup, monitoring, and support for dependable team connectivity.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Network cables connected to hardware",
  },
  {
    title: "Consulting",
    description:
      "Practical technology strategy, system planning, and growth guidance for companies preparing to scale.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Business consulting meeting",
  },
];

const Services = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
        <ServicesBackground />
      </div>

      <div className="absolute inset-0 z-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Our <span className="text-cyan-400">Services</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
            Technology, marketing, and account support presented clearly so
            customers can quickly understand how Atlantic Bridge can help their
            business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={service.imageAlt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
