import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchToEnglish = () => setLanguage('en');
  const switchToRussian = () => setLanguage('ru');
  const switchToChinese = () => setLanguage('zh');
  const switchToFrench = () => setLanguage('fr');
  const switchToTurkish = () => setLanguage('tr');

  return (
    <LanguageContext.Provider value={{ language, switchToEnglish, switchToRussian, switchToChinese, switchToFrench, switchToTurkish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;