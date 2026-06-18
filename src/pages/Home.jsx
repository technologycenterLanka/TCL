import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
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
              {t("home.pill")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {t("home.title1")}<span>{t("home.title2")}</span>{t("home.title3")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("home.desc")}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link className="btn primary" to="/register">
                {t("home.registerBtn")}
              </Link>

              <Link className="btn ghost" to="/login">
                {t("home.signInBtn")}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

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
