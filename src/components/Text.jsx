import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const Text = () => {
  const { language } = useContext(LanguageContext);
  
  let message;
  switch(language) {
    case 'en':
      message = 'English language was chosen';
      break;
    case 'ru':
      message = 'Выбран русский язык';
      break;
    case 'zh':
      message = '选择了中文';
      break;
    case 'fr':
      message = 'La langue française a été choisie';
      break;
    case 'tr':
      message = 'Türkçe dili seçildi';
      break;
    default:
      message = 'Language not supported';
  }

  return (
    <h1>{message}</h1>
  );
};

export default Text;