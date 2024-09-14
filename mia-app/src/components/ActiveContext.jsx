import React, { createContext, useState, useEffect } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'it');
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleSetUser = (userData) => {
    setUser(userData);
  };

  return (
    <ActiveContext.Provider
      value={{
        language,
        handleLanguageChange,
        user,
        setUser: handleSetUser, 
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
