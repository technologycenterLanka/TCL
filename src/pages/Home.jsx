import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TechMarquee from "../components/TechMarquee.jsx";
import { services, projects, process } from "../data/content.js";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  
  // Scroll Parallax Hooks
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const bentoRef = useRef(null);
  const { scrollYProgress: bentoScroll } = useScroll({
    target: bentoRef,
    offset: ["start end", "end start"]
  });
  const bentoY = useTransform(bentoScroll, [0, 1], ["-10%", "10%"]);

  return (
    <main>
      <section className="hero container">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div
              className="pill"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t("hero.badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {t("hero.title")} <span>{t("hero.highlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link className="btn primary" to="/contact">
                {t("buttons.startProject")}
              </Link>

              <Link className="btn ghost" to="/services">
                {t("buttons.exploreServices")}
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="hero-image-wrapper"
            style={{ y: heroY, opacity: heroOpacity }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img src="/premium_software_dev_hero.png" alt="Software Development Workflow" />
          </motion.div>
        </div>
      </section>

      <TechMarquee />

      <section className="container section">
        <SectionTitle
          eyebrow={t("homeServices.eyebrow")}
          title={t("homeServices.title")}
          text={t("homeServices.text")}
        />

        <div className="service-grid">
          {services.slice(0, 8).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionTitle
          eyebrow="Our Impact"
          title="Engineered for Scale"
          text="We build robust, high-performance software that drives business growth and operational efficiency."
        />

        <div className="bento-grid">
          {/* Large Hero Card (2x2) */}
          <motion.div 
            ref={bentoRef}
            className="bento-item bento-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              style={{ y: bentoY, scale: 1.15 }}
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
              alt="Engineering Team" 
            />
            <div className="bento-content">
              <h3>{t("why.title")}</h3>
              <ul className="check-list">
                {t("why.points", { returnObjects: true }).map((x) => (
                  <li key={x}>
                    <CheckCircle2 size={20} />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Small Stat 1 */}
          <motion.div 
            className="bento-item bento-stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <b>25+</b>
            <span>{t("stats.projects")}</span>
          </motion.div>

          {/* Small Stat 2 */}
          <motion.div 
            className="bento-item bento-stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <b>10+</b>
            <span>{t("stats.services")}</span>
          </motion.div>

          {/* Wide Feature (2x1) */}
          <motion.div 
            className="bento-item bento-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <b style={{ fontSize: '28px', color: 'var(--accent)', display: 'block', marginBottom: '8px' }}>24/7 {t("stats.support")}</b>
            <span style={{ color: 'var(--muted)', fontSize: '16px' }}>{t("stats.vision")}</span>
          </motion.div>
        </div>
      </section>

      <section className="container section">
        <SectionTitle
          eyebrow={t("caseStudies.eyebrow")}
          title={t("caseStudies.title")}
          text={t("caseStudies.text")}
        />

        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="project-card" key={p.title}>
              <span>{t(`projects.${i}.type`)}</span>
              <h3>{t(`projects.${i}.title`)}</h3>
              <p>{t(`projects.${i}.desc`)}</p>
              <ArrowRight />
            </article>
          ))}
        </div>
      </section>

      <section className="container cta">
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.text")}</p>

        <Link className="btn primary" to="/contact">
          {t("cta.button")}
        </Link>
      </section>
    </main>
  );
}