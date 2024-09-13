import { useMemo, useContext } from "react";
import { faDiscord, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import ActiveContext from "../components/ActiveContext";
import translations from "../utils/translations";
import Header from "../components/Header";
import '../components/styles/register.scss';

export function Register () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);


  return (
    <>
      <Header/>
      <div className="main">
         <div className="container-register">
            <h1>{translation.sign}</h1>
            <h3>{translation.signInText}</h3>
              <div className="auth">
                <a href='https://discord.com/oauth2/authorize?client_id=1258613251705671690&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=identify+guilds+email'> 
                  <div className="login">
                    <div className="signAuth"> <FontAwesomeIcon icon={faDiscord} /> Continue with Discord </div>
                  </div>
                </a>
                <a href="http://localhost:3001/auth/github">
                  <div className="login">
                    <div className="signAuth"> <FontAwesomeIcon icon={faGithub} /> Continue with GitHub </div>
                  </div>
                </a>
                <div className="login">
                  <div className="lock"> <FontAwesomeIcon icon={faLock} /> </div>
                  <div className="signAuth"> <FontAwesomeIcon icon={faGoogle} /> Continue with Google </div>
                </div>
              </div>      
         </div>
      </div>
    </>
  )
}
