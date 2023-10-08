import React from 'react';
import './style/CurrentInfo.css';
import { Predict, Status} from './Predictor';
import Title from './Title';
import SituationImg from './SituationImg';

function CurrentInfo({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const power = Predict(year, month, day, hour);
  console.log(power);
  const status = Status({index: power});
  console.log(status);

  return (
    <div className='box-cinfo'>
      <Title title="Today"/>
      <div className="current-info">
        <h1>{power + 'Kp'}</h1>
        <SituationImg status={status}/>
        <h2>{status}</h2>
      </div>
    </div>
  );
}

export default CurrentInfo;