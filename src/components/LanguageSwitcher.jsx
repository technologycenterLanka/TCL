import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="floating-lang">
      <button 
        className={i18n.language === 'en' ? 'active' : ''} 
        onClick={() => changeLang("en")}>EN</button>
      <button 
        className={i18n.language === 'de' ? 'active' : ''} 
        onClick={() => changeLang("de")}>DE</button>
    </div>
  );
} 