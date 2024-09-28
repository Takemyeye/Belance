import React, { useContext, useMemo} from "react"
import { Link } from "react-router-dom";
import ActiveContext from "../ActiveContext";
import translations from "../../utils/translations";
import "../styles/footer.scss";

const Footer = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <footer>
      <div className="footer-block">
        <h2>© 2024 Belance</h2>
        <div className="footerContainer">
          <Link to="/maket">
            <h3>{translation.maketDesigns}</h3>
          </Link>
          <Link to="/team">
            <h3>{translation.team}</h3>
          </Link>
          <h3>{translation.privacyPolicy}</h3>
          <h3>{translation.termsOfService}</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer;