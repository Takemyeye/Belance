import React, { useState, useMemo, useContext, useEffect } from "react";
import { Navigation } from "./headerUnit";
import { HeaderLink } from "./headerLink";
import translations from "../../../utils/translations";
import ActiveContext from "../../ActiveContext";

export function NavBar() {
  const { language } = useContext(ActiveContext);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const translation = useMemo(() => translations[language], [language]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBar = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <HeaderLink 
        link='/about' 
        text={translation.about} 
      />
      <HeaderLink 
        link="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com" 
        text={translation.contactUs} 
      />
      {!isMobile && (
        <Navigation 
          text={translation.social} 
          isOpen={openDropdown === 1} 
          onClick={() => handleBar(1)} 
          telegramlink="https://t.me/+_A-d1T6L8a02NzU0"
          instagramlink="https://www.instagram.com/takemyeyegit/"
          faInstagram="faInstagram"
          instagram="Instagram"
          telegram="Telegram"
        />
      )}
    </>
  );
}
