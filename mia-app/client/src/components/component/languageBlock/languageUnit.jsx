import {  useContext } from 'react';
import ActiveContext from '../../ActiveContext';

export function LanguageUnit ({img, text, language}){
  const { handleLanguageChange } = useContext(ActiveContext);

  return (
    <div className="language-block" onClick={() => handleLanguageChange(language)}>
      {text}
      <img src={img} alt="Inter Pointer" /> 
    </div>
  )
}