import React, { createContext, useState, useEffect } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'it');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);


  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <ActiveContext.Provider
      value={{
        language,
        handleLanguageChange,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
