'use client';

import RightContainer from "./components/rightContainer";
import LeftContainer from './components/leftContainer';
import GridCell from "../ui/grid";

import './style/register.css';

export default function RegisterPage() {

  return ( 
    <div className='register'>
      <GridCell/>
      <div className='reg_container'>
        <LeftContainer/>
        <RightContainer/>
      </div>
    </div>
  );
}
