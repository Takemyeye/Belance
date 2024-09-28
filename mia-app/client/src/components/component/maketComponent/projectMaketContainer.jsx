import React, { useMemo, useContext } from 'react';
import { ProjectUnit } from "../../../ui/ProjectUnit"
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

  const img = {
    landing_sushi_italy: "img/landing_sushi_italy.jpg",
    landing_SoulSwap: "img/landing_Soulswap.png",
    landing_no_name: 'img/landing_no_name.jpg',
    landing_deploy: 'img/landing_deploy.png',
    landing_dolce_vita: "img/DolceVita.png",
    portfolioVue: 'img/portfolio-vue.png',
    landing_test: "img/landing_test.jpg",
    angular: 'img/angular.png',
    react: 'img/react.png',
    html: 'img/html.png',
    vue: 'img/vue.png',
  }

export function ProjectContainer () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="designContainer">
      <ProjectUnit 
        link='https://github.com/Takemyeye/LandingPage-deploy'
        title='Deploy.Ai'
        image={img.landing_deploy} 
        description={translation.landingPageReact}
        img={img.react}
      />
      <ProjectUnit 
        link='https://github.com/Takemyeye/landingPage'
        title='No Name'
        image={img.landing_no_name} 
        description={translation.landingPageReact}
        img={img.react}
      />
        <ProjectUnit 
          link='https://github.com/Takemyeye/SS-Vue'
          title='Soul Swap'
          image={img.landing_SoulSwap} 
          description={translation.LandingPageVue}
          img={img.vue}
        />
      <ProjectUnit 
        link='https://github.com/Takemyeye/Sushi-Italia'
        title='Sushi Italy'
        image={img.landing_sushi_italy} 
        description={translation.landingPageReact}
        img={img.react}
      />
      <ProjectUnit 
        link='https://github.com/Takemyeye/DolceVita'
        title='Sushi Italy'
        image={img.landing_dolce_vita} 
        description={translation.landingPageReact}
        img={img.react}
      />
      <ProjectUnit 
        link='https://github.com/Takemyeye/TEST'
        title='Test'
        image={img.landing_test} 
        description={translation.landingPageReact}
        img={img.react}
      />
      <ProjectUnit 
        link='https://github.com/Takemyeye/TEST'
        title='Test'
        image={img.portfolioVue} 
        description={translation.LandingPageVue}
        img={img.vue}
      />
    </div>
  )
}
