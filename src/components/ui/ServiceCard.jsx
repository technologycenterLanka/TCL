import { motion } from "framer-motion";

const ServiceCard = ({ title, description, image, imageAlt }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative h-full overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60 shadow-lg backdrop-blur-md transition hover:border-cyan-400/40 hover:shadow-cyan-500/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="absolute inset-x-6 top-0 h-px bg-cyan-400/30" />

        <h3 className="mb-3 text-xl font-bold text-cyan-300">{title}</h3>

        <p className="text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
