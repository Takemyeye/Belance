import React, { useMemo, useContext } from 'react';
import { ProjectContainer } from './projectMaketContainer';
import { MaketCards } from './maketCard' 
import ActiveContext from '../../ActiveContext';
import translations from '../../../utils/translations';

export function MaketContainer () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="maket">
      <div className='text'>
        <h5>{translation.templates}</h5>
        <h1>{translation.technologiesTitle}</h1>   
      </div>    
      <MaketCards/>
      <ProjectContainer/>
    </div>
  )
}