import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const apiUrl = import.meta.env.VITE_API_URL || '';

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email }));
      
      alert(`Welcome back, ${data.name}!`);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '440px', background: 'var(--panel)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--line)' }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{t("auth.signIn")}</h2>
          <p style={{ color: 'var(--muted)', marginTop: '8px' }}>{t("auth.signInDesc")}</p>
        </div>

        {error && <div style={{ marginBottom: '1rem', padding: '12px', background: '#fee2e2', color: '#dc2626', borderRadius: '6px' }}>{error}</div>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label>
            <span style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t("auth.email")}</span>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', border: '1px solid var(--line)', borderRadius: '6px', outline: 'none' }}
              required
            />
          </label>

          <label>
            <span style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{t("auth.pwd")}</span>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', border: '1px solid var(--line)', borderRadius: '6px', outline: 'none' }}
              required
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn primary"
          style={{ width: '100%', marginTop: '2rem', display: 'block', textAlign: 'center', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          {isLoading ? t("auth.signingIn") : t("auth.signIn")}
        </button>
        
        <p style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--muted)', fontSize: '14px' }}>
          {t("auth.noAccount")}{" "}
          <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '600' }}>
            {t("auth.regHere")}
          </Link>
        </p>
      </motion.form>
    </section>
  );
};

export default Login;
