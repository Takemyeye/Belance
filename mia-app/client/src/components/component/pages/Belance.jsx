import React from 'react';
import { BelanceUnitLeft } from '../belance/belanceUnitLeft';
import { BelanceUnitRight } from '../belance/belanceUnitRight';

const Belance = () => {


  return (
    <div className="belance-background">
      <div className="belance">
       <BelanceUnitLeft/>
        <BelanceUnitRight/>
      </div>
    </div>
  );
};

export default Belance;