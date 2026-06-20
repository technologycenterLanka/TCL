import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Smartphone, Layers, Server, Shield, Cpu, Database, Zap } from "lucide-react";

const SoftwareDevelopment = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Layers size={28} />,
      title: "softwareDev.feature1Title",
      desc: "softwareDev.feature1Desc",
      delay: 0.1
    },
    {
      icon: <Smartphone size={28} />,
      title: "softwareDev.feature2Title",
      desc: "softwareDev.feature2Desc",
      delay: 0.2
    },
    {
      icon: <Zap size={28} />,
      title: "softwareDev.feature3Title",
      desc: "softwareDev.feature3Desc",
      delay: 0.3
    }
  ];

  const technologies = [
    { name: "React", icon: <Code2 size={24} /> },
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "PostgreSQL", icon: <Database size={24} /> },
    { name: "AI Integration", icon: <Cpu size={24} /> },
    { name: "Cybersecurity", icon: <Shield size={24} /> },
  ];

  return (
    <main className="page" style={{ paddingTop: '120px' }}>
      
      {/* Hero Section */}
      <section className="container section" style={{ paddingBottom: '60px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pill" style={{ margin: '0 auto 24px auto' }}>
              {t("softwareDev.eyebrow")}
            </div>
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-1px' }}>
              {t("softwareDev.title1")}
              <span style={{ color: 'var(--primary)' }}>{t("softwareDev.title2")}</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--muted)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
              {t("softwareDev.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image Graphic */}
      <section className="container section" style={{ paddingTop: '0' }}>
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            width: '100%',
            height: 'clamp(300px, 40vh, 500px)',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80" 
            alt="Software Development" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--bg-color) 0%, transparent 100%)',
            opacity: 0.8
          }}></div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container section">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(252, 163, 17, 0.1)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '12px', color: 'var(--accent)' }}>
                  {t(feature.title)}
                </h3>
                <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>
                  {t(feature.desc)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee (Static variation) */}
      <section className="container section">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--accent)' }}>{t("softwareDev.techTitle")}</h2>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                borderRadius: '100px',
                border: '1px solid var(--line)',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              <div style={{ color: 'var(--primary)' }}>{tech.icon}</div>
              <span style={{ fontWeight: '600', color: 'var(--text)' }}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container section" style={{ paddingBottom: '120px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{
            padding: '60px 40px',
            borderRadius: '24px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(252, 163, 17, 0.1) 0%, rgba(10, 37, 64, 0.4) 100%)',
            border: '1px solid rgba(252, 163, 17, 0.3)',
          }}
        >
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--accent)' }}>
            {t("softwareDev.ctaTitle")}
          </h2>
          <a href="#/contact" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '20px', padding: '16px 32px', fontSize: '16px' }}>
            {t("softwareDev.ctaBtn")}
          </a>
        </motion.div>
      </section>
      
    </main>
  );
};

export default SoftwareDevelopment;
