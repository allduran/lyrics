import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'ES' : 'EN'));
  };

  const translations = {
    EN: {
      title: "Song Lyrics Searcher",
    },
    ES: {
      title: "Buscador de Letras de Canciones",
    },
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
