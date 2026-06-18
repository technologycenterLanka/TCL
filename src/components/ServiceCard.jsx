import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.article 
      className="service-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative' }}
    >
      <motion.div
        className="spotlight-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(252, 163, 17, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="service-img-wrapper" style={{ position: 'relative', zIndex: 2 }}>
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="icon">
          <Icon size={28} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <a>Explore service <ArrowUpRight size={16} /></a>
      </div>
    </motion.article>
  );
}
