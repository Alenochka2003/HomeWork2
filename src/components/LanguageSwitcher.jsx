import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const LanguageSwitcher = () => {
  const { switchToEnglish, switchToRussian, switchToChinese, switchToFrench, switchToTurkish } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={switchToEnglish}>English</button>
      <button onClick={switchToRussian}>Russian</button>
      <button onClick={switchToChinese}>Chinese</button>
      <button onClick={switchToFrench}>French</button>
      <button onClick={switchToTurkish}>Turkish</button>
    </div>
  );
};

export default LanguageSwitcher;