import React, { useState } from 'react';
import './style/Coltile.css'
import {Status} from './Predictor';
import SituationImg from './SituationImg';

function Coltile({hour, power}) {
  const timestr = (hour < 10 ? '0' : '') + hour + ':00';
  const status = Status({index: power});
  return(
    <div className='coltile'>
      <div className='coltile-left'>
        <h2>{timestr}</h2>
      </div>
        <SituationImg status={status}/>
      <div className='coltile-right'>
        <h3>{status}</h3>
        <h1 className='power-rate'>{power + 'Kp'}</h1>
      </div>
    </div>
  )
}

export default Coltile;