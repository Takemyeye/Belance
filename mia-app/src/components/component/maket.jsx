import React, { useMemo, useContext } from 'react';
import { MaketContainer } from "./maket/maketContainer";
import { MaketUnit } from './maket/maketUnit';
import ActiveContext from '../ActiveContext';
import translations from '../../utils/translations';
import Header from "../Header";
import Footer from "./footer";
import "../styles/maket.scss";

const Maket = () => {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <>
      <Header/>
      <div className="maket">
        <div className='text'>
          <h5>{translation.templates}</h5>
          <h1>  {translation.technologiesTitle}</h1>   
        </div>    
        <MaketUnit/>
        <MaketContainer/>
      </div>
      <Footer/>
    </>
  )
}

export default Maket;