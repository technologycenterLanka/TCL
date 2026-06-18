import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 }
  }
};

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div 
      className="section-title"
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div style={{ overflow: "hidden" }}>
        <motion.span variants={itemVariant} style={{ display: "block" }}>{eyebrow}</motion.span>
      </div>
      
      <div style={{ overflow: "hidden", paddingBottom: "10px" }}>
        <motion.h2 variants={itemVariant}>{title}</motion.h2>
      </div>

      {text && (
        <div style={{ overflow: "hidden" }}>
          <motion.p variants={itemVariant}>{text}</motion.p>
        </div>
      )}
    </motion.div>
  );
}
