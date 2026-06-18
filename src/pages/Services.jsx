import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle.jsx";

const Services = () => {
  const { t } = useTranslation();

  const serviceKeys = [
    { 
      title: "services.s1Title", desc: "services.s1Desc",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80" 
    },
    { 
      title: "services.s2Title", desc: "services.s2Desc",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" 
    },
    { 
      title: "services.s3Title", desc: "services.s3Desc",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80" 
    },
    { 
      title: "services.s4Title", desc: "services.s4Desc",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80" 
    },
    { 
      title: "services.s5Title", desc: "services.s5Desc",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=80" 
    },
    { 
      title: "services.s6Title", desc: "services.s6Desc",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80" 
    },
    { 
      title: "services.s7Title", desc: "services.s7Desc",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80" 
    },
    { 
      title: "services.s8Title", desc: "services.s8Desc",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" 
    },
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
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={item.image} 
                  alt={t(item.title)} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary)' }}>
                  {t(item.title)}
                </h3>
                <p style={{ color: 'var(--text)', fontSize: '15px', lineHeight: '1.6' }}>
                  {t(item.desc)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
