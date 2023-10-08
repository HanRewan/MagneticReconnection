import React, { useState } from 'react';
import './style/Week.css';
import Linetile from './Linetile';
import {Predict, Status} from './Predictor';
import Title from './Title';

function Week({date}) {
    const weekday = date.getDay();
    const WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const linetileComponents = [];
    var power;
    const changeDate = new Date(date);
    for (let i = 1; i <= 7; i++) {
        changeDate.setDate(changeDate.getDate()+1);
        const year = changeDate.getFullYear();
        const month = changeDate.getMonth() + 1;
        const day = changeDate.getDate();
        const hour = changeDate.getHours();
        const delta = (i-1)*5;
        const backgroundColor = `rgba(${75-delta}, ${68-delta}, ${102-delta}, 0.9)`;
        power = Predict(year, month, day, hour);
        linetileComponents.push(<Linetile day={WeekDays[(weekday+i-1)%7]} power={power} backgroundColor={backgroundColor}/>);
    }
    return(
    <div className="week">
        <Title title={'Weekly forecast'}/>
        <div className="inner-content">
            {linetileComponents}
        </div>
    </div>
    )
}

export default Week;