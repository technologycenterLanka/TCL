import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function TechShape() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      {/* Outer abstract wireframe (Orange) */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.4, 0.35, 128, 16]} />
        <meshStandardMaterial color="#fca311" wireframe />
      </mesh>
      
      {/* Inner solid tech core (Navy Blue) */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial color="#0A2540" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const bentoRef = useRef(null);
  const { scrollYProgress: bentoScroll } = useScroll({
    target: bentoRef,
    offset: ["start end", "end start"]
  });
  const bentoY = useTransform(bentoScroll, [0, 1], ["-10%", "10%"]);

  // Language Slideshow Logic
  const languages = ['en', 'de', 'pt', 'es'];
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % languages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, languages.length]);

  const slideLang = languages[slideIndex];
  const slideT = i18n.getFixedT(slideLang);

  // Dispatch custom event to notify Navbar of language change
  useEffect(() => {
    const event = new CustomEvent('heroSlideLanguage', { detail: slideLang });
    window.dispatchEvent(event);
    
    return () => {
      window.dispatchEvent(new CustomEvent('heroSlideLanguage', { detail: null }));
    };
  }, [slideLang]);

  return (
    <main>
      <section className="hero container">
        <div className="hero-grid">
          <div 
            className="hero-copy"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ minHeight: '480px' }}
          >
            {/* Slide Pagination Dots */}
            <div className="slide-dots" style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '8px', marginBottom: '25px' }}>
              {languages.map((lang, index) => (
                <button
                  key={lang}
                  onClick={() => setSlideIndex(index)}
                  style={{
                    width: slideIndex === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: slideIndex === index ? 'var(--primary)' : 'rgba(10, 37, 64, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={slideLang}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', minHeight: '250px' }}
              >
                <div className="pill">
                  {slideT("home.pill")}
                </div>

                <h1>
                  {slideT("home.title1")}<span>{slideT("home.title2")}</span>{slideT("home.title3")}
                </h1>

                <p style={{ marginBottom: 0 }}>
                  {slideT("home.desc")}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Canvas camera={{ position: [0, 0, 9], fov: 35 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <directionalLight position={[-10, -10, -5]} intensity={1} color="#fca311" />
              <TechShape />
            </Canvas>
          </motion.div>
        </div>
      </section>

      {/* Under Construction Badge */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(10, 37, 64, 0.85)',
        backdropFilter: 'blur(12px)',
        color: '#ff4d4d',
        padding: '12px 28px',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '14px',
        zIndex: 100,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 77, 77, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        letterSpacing: '0.5px'
      }}>
        <span style={{ fontSize: '18px' }}>🚧</span>
        Website Under Construction
      </div>

      <section className="container section">
        <div className="bento-grid">
          <motion.div 
            ref={bentoRef}
            className="bento-item bento-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bento-content">
              <h3>{t("home.whyTitle")}</h3>
              <ul className="check-list">
                <li><CheckCircle2 size={20} /> {t("home.check1")}</li>
                <li><CheckCircle2 size={20} /> {t("home.check2")}</li>
                <li><CheckCircle2 size={20} /> {t("home.check3")}</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bento-item bento-stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <b>{t("home.stat1Val")}</b>
            <span>{t("home.stat1Lbl")}</span>
          </motion.div>

          <motion.div 
            className="bento-item bento-stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <b>{t("home.stat2Val")}</b>
            <span>{t("home.stat2Lbl")}</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
