import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle.jsx";

const Contact = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const isQuoteRequest = searchParams.get("request") === "quote";
  const initialMessage = isQuoteRequest
    ? t("contact.quoteText")
    : "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: initialMessage,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    const apiUrl = import.meta.env.VITE_API_URL || '';

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: isQuoteRequest ? "Quote Request" : "General Inquiry",
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || t("contact.err"));
      }

      setSuccessMessage(
        isQuoteRequest
          ? t("contact.successQuote")
          : t("contact.successTouch")
      );
      setForm({ name: "", email: "", message: initialMessage });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="container section contact">
        <SectionTitle 
          eyebrow="CONTACT" 
          title={isQuoteRequest ? t("contact.quoteTitle") : t("contact.touchTitle")} 
          text={isQuoteRequest ? t("contact.quoteText") : t("contact.touchText")}
        />
        
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            {error && <div style={{ color: '#dc2626', background: '#fee2e2', padding: '12px', borderRadius: '6px', marginBottom: '1rem' }}>{error}</div>}
            {successMessage && <div style={{ color: '#16a34a', background: '#dcfce7', padding: '12px', borderRadius: '6px', marginBottom: '1rem' }}>{successMessage}</div>}

            <input 
              type="text" 
              name="name"
              placeholder={t("contact.name")} 
              value={form.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder={t("contact.email")} 
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message"
              placeholder={isQuoteRequest ? t("contact.msgQuote") : t("contact.msgTouch")} 
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isLoading} className="btn primary" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              {isLoading ? t("contact.send") : (isQuoteRequest ? t("contact.btnQuote") : t("contact.btnTouch"))}
            </button>
          </form>

          <div className="glass-panel" style={{ background: 'var(--panel-hover)', border: '1px solid var(--line)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '20px' }}>{t("contact.details")}</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: '500' }}>Email: <span style={{ color: 'var(--muted)', fontWeight: '400' }}>contact@atlanticbridge.com</span></p>
            
            <div style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: '500' }}>
              {t("contact.locationLbl")}
              <div style={{ color: 'var(--muted)', fontWeight: '400', marginTop: '4px', lineHeight: '1.5' }}>
                ATLANTIC BRIDGE EXCHANGE LTD<br />
                Unity House, Suite 888<br />
                Westwood Park, Wigan, WN3 4HE<br />
                England
              </div>
            </div>

            <p style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: '500' }}>
              {t("contact.companyNumLbl")} <span style={{ color: 'var(--muted)', fontWeight: '400' }}>16995192</span>
            </p>

            <p style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: '500' }}>{t("contact.supportLbl")} <span style={{ color: 'var(--muted)', fontWeight: '400' }}>{t("contact.supportVal")}</span></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
