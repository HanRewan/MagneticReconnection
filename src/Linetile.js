import React from 'react';
import './style/Linetile.css';
import {Predict, Status} from './Predictor';
import SituationImg from './SituationImg';

function Linetile({ day, power, backgroundColor }) {
  const tileStyle = {
    backgroundColor: backgroundColor, // Apply the background color here
  };
  const status = Status({index: power});

  return (
    <div className="linetile" style={tileStyle}>
      <h1>{day}</h1>
      <SituationImg status={status}/>
      <h1 className='data'>{power + 'Kp'}</h1>
      <h2>{status}</h2>
    </div>
  );
}

export default Linetile;