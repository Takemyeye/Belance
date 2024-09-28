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

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <ActiveContext.Provider
      value={{
        language,
        handleLanguageChange,
        setUser: handleSetUser, 
        logout,
        user,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
