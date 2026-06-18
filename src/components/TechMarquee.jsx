import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', url: 'https://cdn.simpleicons.org/react/64748b' },
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/64748b' },
  { name: 'Firebase', url: 'https://cdn.simpleicons.org/firebase/64748b' },
  { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/64748b' },
  { name: 'Python', url: 'https://cdn.simpleicons.org/python/64748b' },
  { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/64748b' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/64748b' },
  { name: 'Figma', url: 'https://cdn.simpleicons.org/figma/64748b' },
  { name: 'MongoDB', url: 'https://cdn.simpleicons.org/mongodb/64748b' },
  { name: 'GraphQL', url: 'https://cdn.simpleicons.org/graphql/64748b' },
];

export default function TechMarquee() {
  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-label">POWERING NEXT-GENERATION ENTERPRISES WITH</p>
      </div>
      <div className="marquee-wrapper">
        <motion.div 
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 35 
          }}
        >
          {/* Duplicate the array to create a seamless infinite loop */}
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="marquee-item">
              <img src={tech.url} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
