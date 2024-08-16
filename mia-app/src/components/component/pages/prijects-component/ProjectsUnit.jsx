import React, { useMemo, useContext } from "react";
import { ProjectUnit } from "../../../../ui/ProjectUnit";
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";


const img = {
  ssPortfolio: 'img/SS-Portfolio.png',
  sushi: 'img/Sushi-Italia.jpg',  
  impactium: 'img/Impactium.jpg',
  compress: 'img/compress.png',
  dolcevita: 'img/DolceVita.png',
  html: 'img/html.png',
  react: 'img/react.png',
  vue: 'img/vue.png',
  angular: 'img/angular.png'
}

export function ProjectContainer () {
  const { language } = useContext(ActiveContext);

  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="projects-container">
      <ProjectUnit 
        link='https://impactium.fun'
        title='Impactium' 
        description={translation.descriptionWork1}
        image={img.impactium} 
        img={img.react}
        />
      <ProjectUnit 
        link='https://example.com'
        title='Sushi Italia' 
        description={translation.descriptionWork2}
        image={img.sushi} 
        img={img.react}
        />
      <ProjectUnit 
        link='https://soulswap-portfolio.netlify.app/'
        title='Portfolio SS' 
        description={translation.descriptionWork3}
        image={img.ssPortfolio}
        img={img.react}
        />
      <ProjectUnit 
        link='https://belance-compress.netlify.app/'
        title='Belance Compress' 
        description={translation.descriptionWork4}
        image={img.compress}
        img={img.react}
        />
      <ProjectUnit 
        link='https://dolce-vita.netlify.app/'
        title='Dolce Vita' 
        description={translation.descriptionWork5}
        image={img.dolcevita}
        img={img.react}
        />
    </div>
  )
}