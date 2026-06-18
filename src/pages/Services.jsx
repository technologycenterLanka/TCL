import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle.jsx";

const Services = () => {
  const { t } = useTranslation();

  const serviceKeys = [
    { title: "services.s1Title", desc: "services.s1Desc" },
    { title: "services.s2Title", desc: "services.s2Desc" },
    { title: "services.s3Title", desc: "services.s3Desc" },
    { title: "services.s4Title", desc: "services.s4Desc" },
    { title: "services.s5Title", desc: "services.s5Desc" },
    { title: "services.s6Title", desc: "services.s6Desc" },
    { title: "services.s7Title", desc: "services.s7Desc" },
    { title: "services.s8Title", desc: "services.s8Desc" },
  ];

  return (
    <main className="page">
      <section className="container section">
        <SectionTitle 
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          text={t("services.desc")}
        />

        <div className="services-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          marginTop: '3rem'
        }}>
          {serviceKeys.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{
                background: 'var(--panel-hover)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary)' }}>
                {t(item.title)}
              </h3>
              <p style={{ color: 'var(--text)', fontSize: '15px', lineHeight: '1.6' }}>
                {t(item.desc)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
