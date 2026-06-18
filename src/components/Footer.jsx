import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <b>TC <span>LANKA</span></b>
            <p>Engineering Digital Products from Sri Lanka to the World. We build high-performance software for modern enterprises.</p>
          </div>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            <div>
              <b style={{ color: "white", marginBottom: "16px", display: "block" }}>Company</b>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "var(--muted)" }}>
                <Link to="/about">About Us</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div>
              <b style={{ color: "white", marginBottom: "16px", display: "block" }}>Services</b>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "var(--muted)" }}>
                <Link to="/services">Web Development</Link>
                <Link to="/services">Cloud Solutions</Link>
                <Link to="/services">UX/UI Design</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TC LANKA. All rights reserved.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
