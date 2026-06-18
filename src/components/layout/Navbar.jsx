import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher.jsx";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);

  const links = [
    [t("nav.home"), "/"],
    [t("nav.services"), "/services"],
    [t("nav.contact"), "/contact"],
    [t("nav.signIn"), "/login"],
  ];

  return (
    <motion.header
      className="nav-shell"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Link className="brand" to="/">
        Atlantic <span>Bridge</span> Exchange
      </Link>

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

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <LanguageSwitcher />
        <Link className="nav-cta" to="/register">
          {t("nav.register")}
        </Link>
      </div>
    </motion.header>
  );
}
