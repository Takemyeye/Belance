'use client';

import RightContainer from "./components/rightContainer";
import LeftContainer from './components/leftContainer';

import './style/register.css';

export default function RegisterPage() {

  return ( 
    <div className='register'>
      <div className='reg_container'>
        <LeftContainer/>
        <RightContainer/>
      </div>
    </div>
  );
}
