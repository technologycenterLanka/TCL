import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "../utils/countries.js";
import { ChevronDown } from "lucide-react";

const CountrySelect = ({ value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedCountry = countries.find(c => c.code === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "100%" }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid var(--line)",
          borderRadius: "6px",
          background: "var(--panel)",
          color: "var(--text)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "16px",
          textAlign: "left"
        }}
      >
        {selectedCountry ? (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img 
              src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} 
              alt={selectedCountry.name} 
              style={{ width: "20px", height: "auto", borderRadius: "2px" }}
            />
            <span>{selectedCountry.name}</span>
          </div>
        ) : (
          <span style={{ color: "var(--muted)" }}>{placeholder}</span>
        )}
        <ChevronDown size={18} style={{ color: "var(--muted)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              marginTop: "8px",
              background: "var(--bg)",
              border: "1px solid var(--line-strong)",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              maxHeight: "250px",
              overflowY: "auto",
              zIndex: 50,
            }}
          >
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => {
                  onChange({ target: { name: "country", value: country.code } });
                  setIsOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: value === country.code ? "var(--line)" : "transparent",
                  border: "none",
                  color: "var(--text)",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => {
                  if (value !== country.code) e.currentTarget.style.background = "var(--panel-hover)";
                }}
                onMouseOut={(e) => {
                  if (value !== country.code) e.currentTarget.style.background = "transparent";
                }}
              >
                <img 
                  src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} 
                  alt={country.name} 
                  style={{ width: "20px", height: "auto", borderRadius: "2px" }}
                />
                <span>{country.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountrySelect;
