import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Careers", "/careers"],
  ["Blog", "/blog"],
];

export default function Navbar() {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <motion.header
      className="nav-shell"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Link className="brand" to="/">
        TC<span>LANKA</span>
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

      <div className="nav-right" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link className="nav-link-item" to="/login">
          Sign In
        </Link>
        <Link className="nav-cta" to="/register">
          Register
        </Link>
      </div>
    </motion.header>
  );
}