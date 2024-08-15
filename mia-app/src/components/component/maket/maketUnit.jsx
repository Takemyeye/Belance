import React, { useMemo, useContext } from 'react';
import { CardMaket } from "./cardMaket";
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';
import "./styles/maketUnit.scss";

const img = {
  html: 'img/html.png',
  react: 'img/react.png',
  vue: 'img/vue.png',
  angular: 'img/angular.png'
};

export function MaketUnit() {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="maketUnit">
      <CardMaket
        img={img.html}
        title="HTML"
        subTitle={translation.html}
      />
      <CardMaket
        img={img.react}
        title="React"
        subTitle={translation.react}
      />
      <CardMaket
        img={img.vue}
        title="Vue"
        subTitle={translation.vue}
      />
      <CardMaket
        img={img.angular}
        title="Angular"
        subTitle={translation.angular}
      />
    </div>
  );
}
