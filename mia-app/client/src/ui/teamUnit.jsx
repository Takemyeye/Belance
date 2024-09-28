import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export function TeamUnit ({name, possition, description}) {
  return (
    <div className="teamUnit">
      <div className='containerTeam-top'>
        <div className="avatar"> <FontAwesomeIcon icon={faUser} /> </div>
        <div className='description'>
          <h2>{name}</h2>
          <h3>{possition}</h3>
        </div> 
      </div>
        <div className='description'>
          <h3>{description}</h3>
        </div>
    </div>
  )
}