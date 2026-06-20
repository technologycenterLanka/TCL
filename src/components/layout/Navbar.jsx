import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher.jsx";
import logoUrl from "../../assets/abe-logo-main.png";
import { useSlide } from "../../context/SlideContext";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { slideLang } = useSlide();
  const slideT = i18n.getFixedT(slideLang);

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
              style={{ position: "relative" }}
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

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <LanguageSwitcher />
        <AnimatePresence mode="wait">
          <motion.div 
            key={slideLang}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', gap: '0.75rem' }}
          >
            <Link 
              className="btn ghost" 
              to="/login"
              onClick={() => i18n.changeLanguage(slideLang)}
              style={{ padding: '0 16px', height: '36px', fontSize: '13px', display: 'flex', alignItems: 'center' }}
            >
              {slideT("home.signInBtn")}
            </Link>
            <Link 
              className="btn primary" 
              to="/register"
              onClick={() => i18n.changeLanguage(slideLang)}
              style={{ padding: '0 16px', height: '36px', fontSize: '13px', display: 'flex', alignItems: 'center' }}
            >
              {slideT("home.registerBtn")}
            </Link>
          </motion.div>
        </AnimatePresence>
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
              <LanguageSwitcher />
              <Link className="btn primary" to="/register" style={{ width: '100%', marginTop: '15px' }}>
                {t("nav.register")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
