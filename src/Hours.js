import React, { useState } from 'react';
import './style/Hours.css'
import Coltile from './Coltile';
import {Predict, Status} from './Predictor';
import Title from './Title';

function Hours({date}) {
  const coltileComponents = [];
  var power;
  const changeDate = new Date(date);
  for (let i = 1; i <= 24; i++) {
    changeDate.setTime(changeDate.getTime() + (60*60*1000));
    const year = changeDate.getFullYear();
    const month = changeDate.getMonth() + 1;
    const day = changeDate.getDate();
    const hour = changeDate.getHours();
    power = Predict(year, month, day, hour);
    
    coltileComponents.push(<Coltile hour={hour} power={power}/>);
  }

  return(
    <div className="hours">
      <Title title="Hour"/>
      <div className="inner-content">
        {coltileComponents}
      </div>
    </div>
  )
}

export default Hours;