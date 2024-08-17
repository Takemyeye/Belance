import React, { useContext, useMemo} from "react";
import { LanguageUnit } from "./languageUnit";
import ActiveContext from "../../ActiveContext";
import translations from "../../../utils/translations";

const img = ['img/Italy.svg', 'img/England.svg', 'img/Russia.svg', 'img/Ukraine.svg', 'img/Poland.svg'];

export function LanguageBlock () {
  const { language } = useContext(ActiveContext); 

  const translation = useMemo(() => translations[language], [language]);

  return (
    <>
      <LanguageUnit
        img={img[0]}
        text={translation.it}
        language='it'/>
      <LanguageUnit
        img={img[1]}
        text={translation.en}
        language='en'/>
      <LanguageUnit
        img={img[2]}
        text={translation.ru}
        language='ru'/>
      <LanguageUnit
        img={img[3]}
        text={translation.uk}
        language='uk'/>
      <LanguageUnit
        img={img[4]}
        text={translation.pl}
        language='pl'/>
    </>
  )
}