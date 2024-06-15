import React from 'react';
import './App.module.css';
import { LanguageProvider } from './components/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import Text from './components/Text';

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <Text />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

export default App;
