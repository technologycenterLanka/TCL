import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "../utils/countries.js";
import { ChevronDown } from "lucide-react";

const PhoneInput = ({ dialCodeValue, onDialCodeChange, phoneValue, onPhoneChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedCountry = countries.find(c => c.code === dialCodeValue) || countries.find(c => c.code === "US");

  const handlePhoneChange = (e) => {
    let newPhone = e.target.value;
    
    if (newPhone.startsWith('+')) {
      const sortedCountries = [...countries].sort((a, b) => b.dialCode.length - a.dialCode.length);
      const matchedCountry = sortedCountries.find(c => newPhone.startsWith(c.dialCode));
      
      if (matchedCountry) {
        if (matchedCountry.code !== dialCodeValue) {
          onDialCodeChange({ target: { name: "dialCode", value: matchedCountry.code } });
        }
        newPhone = newPhone.slice(matchedCountry.dialCode.length).trim();
      }
    }
    
    onPhoneChange({ target: { name: "phone", value: newPhone } });
  };

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
    <div ref={wrapperRef} style={{ position: "relative", width: "100%", display: "flex", alignItems: "center", border: "1px solid var(--line)", borderRadius: "6px", background: "var(--panel)" }}>
      {/* Dropdown for Country Code */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          border: "none",
          borderRight: "1px solid var(--line)",
          cursor: "pointer",
          minWidth: "100px",
          fontFamily: "inherit",
          fontSize: "15px",
          color: "var(--text)"
        }}
      >
        <img 
          src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} 
          alt={selectedCountry.name} 
          style={{ width: "20px", height: "auto", borderRadius: "2px" }}
        />
        <span>{selectedCountry.dialCode}</span>
        <ChevronDown size={14} style={{ color: "var(--muted)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", marginLeft: "auto" }} />
      </button>

      {/* Phone Number Input */}
      <input
        type="tel"
        name="phone"
        value={phoneValue}
        onChange={handlePhoneChange}
        style={{
          flex: 1,
          padding: "12px",
          background: "transparent",
          border: "none",
          outline: "none",
          color: "var(--text)",
          fontFamily: "inherit",
          fontSize: "15px",
          width: "100%"
        }}
        required
      />

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
              width: "300px",
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
                  onDialCodeChange({ target: { name: "dialCode", value: country.code } });
                  setIsOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: dialCodeValue === country.code ? "var(--line)" : "transparent",
                  border: "none",
                  color: "var(--text)",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => {
                  if (dialCodeValue !== country.code) e.currentTarget.style.background = "var(--panel-hover)";
                }}
                onMouseOut={(e) => {
                  if (dialCodeValue !== country.code) e.currentTarget.style.background = "transparent";
                }}
              >
                <img 
                  src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} 
                  alt={country.name} 
                  style={{ width: "20px", height: "auto", borderRadius: "2px" }}
                />
                <span style={{ color: "var(--muted)", width: "40px" }}>{country.dialCode}</span>
                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{country.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhoneInput;
