import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import logoUrl from "../../assets/abe-logo-main.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroLang, setHeroLang] = useState(null);

  // Listen to Hero slide changes
  useEffect(() => {
    const handleHeroLang = (e) => setHeroLang(e.detail);
    window.addEventListener('heroSlideLanguage', handleHeroLang);
    return () => window.removeEventListener('heroSlideLanguage', handleHeroLang);
  }, []);

  // Determine which language to use for the Navbar buttons
  const isHome = location.pathname === '/';
  const currentLang = heroLang && isHome ? heroLang : i18n.language;
  const slideT = heroLang && isHome ? i18n.getFixedT(heroLang) : t;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const links = [
    [t("nav.home"), "/"],
    [t("nav.services"), "/services"],
    [t("nav.contact"), "/contact"],
  ];

  return (
    <motion.header
      className="nav-shell"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Link className="brand" to="/">
        <img src={logoUrl} alt="ABE Logo" className="brand-logo" />
        <div className="brand-text">Atlantic <span>Bridge</span> Exchange</div>
      </Link>

      {/* Desktop Navigation */}
      <nav onMouseLeave={() => setHoveredPath(null)}>
        {links.map(([name, path]) => {
          const isActive = location.pathname === path;
          const isHovered = hoveredPath === path;
          const showLine = hoveredPath ? isHovered : isActive;

          return (
            <Link
              key={name}
              to={path}
              className={`nav-link-item ${isActive ? "active" : ""}`}
              onMouseEnter={() => setHoveredPath(path)}
              style={{ position: "relative", minWidth: '135px', textAlign: 'center' }}
            >
              {name}
              {showLine && (
                <motion.div
                  layoutId="magic-line"
                  className="magic-line"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link className="nav-link-item" to="/login" onClick={() => isHome && i18n.changeLanguage(currentLang)} style={{ minWidth: '110px', textAlign: 'center' }}>
          {slideT("nav.signIn")}
        </Link>
        <Link className="nav-cta" to="/register" onClick={() => isHome && i18n.changeLanguage(currentLang)} style={{ minWidth: '150px', textAlign: 'center', display: 'inline-flex', justifyContent: 'center' }}>
          {slideT("nav.register")}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(([name, path]) => (
              <Link 
                key={name} 
                to={path} 
                className="mobile-link"
              >
                {name}
              </Link>
            ))}
            <div className="mobile-menu-bottom">
              <Link className="mobile-link" to="/login" onClick={() => isHome && i18n.changeLanguage(currentLang)} style={{ width: '100%', marginTop: '15px' }}>
                {slideT("nav.signIn")}
              </Link>
              <Link className="btn primary" to="/register" onClick={() => isHome && i18n.changeLanguage(currentLang)} style={{ width: '100%', marginTop: '10px' }}>
                {slideT("nav.register")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
