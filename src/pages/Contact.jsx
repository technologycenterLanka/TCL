import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isQuoteRequest = searchParams.get("request") === "quote";
  const initialMessage = isQuoteRequest
    ? "I would like to request a quote for "
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
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccessMessage(
        isQuoteRequest
          ? "Quote request sent successfully!"
          : "Message sent successfully!"
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
          title={isQuoteRequest ? "Request a Quote" : "Get in Touch"} 
          text={isQuoteRequest ? "Tell us what your business needs and we will prepare a clear estimate." : "Have a question or need support? Send us a message and we'll respond within 24 hours."}
        />
        
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            {error && <div style={{ color: '#dc2626', background: '#fee2e2', padding: '12px', borderRadius: '6px', marginBottom: '1rem' }}>{error}</div>}
            {successMessage && <div style={{ color: '#16a34a', background: '#dcfce7', padding: '12px', borderRadius: '6px', marginBottom: '1rem' }}>{successMessage}</div>}

            <input 
              type="text" 
              name="name"
              placeholder="Your name" 
              value={form.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email address" 
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message"
              placeholder={isQuoteRequest ? "Tell us what service you need a quote for" : "Your Message"} 
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isLoading} className="btn primary" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="glass-panel" style={{ background: 'var(--panel-hover)', border: '1px solid var(--line)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '20px' }}>Contact Details</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: '500' }}>Email: <span style={{ color: 'var(--muted)', fontWeight: '400' }}>contact@atlanticbridge.com</span></p>
            <p style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: '500' }}>Location: <span style={{ color: 'var(--muted)', fontWeight: '400' }}>Colombo, Sri Lanka</span></p>
            <p style={{ marginBottom: '1rem', color: 'var(--text)', fontWeight: '500' }}>Support: <span style={{ color: 'var(--muted)', fontWeight: '400' }}>24/7 Dedicated Support</span></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
