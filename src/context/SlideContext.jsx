import { createContext, useContext, useState, useEffect } from 'react';

const SlideContext = createContext();

export const useSlide = () => useContext(SlideContext);

export const SlideProvider = ({ children }) => {
  const languages = ['en', 'de', 'pt', 'es'];
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % languages.length);
    }, 5000); // Changed to 5 seconds
    return () => clearInterval(interval);
  }, [isHovered, languages.length]);

  const slideLang = languages[slideIndex];

  return (
    <SlideContext.Provider value={{ slideIndex, setSlideIndex, slideLang, isHovered, setIsHovered, languages }}>
      {children}
    </SlideContext.Provider>
  );
};
