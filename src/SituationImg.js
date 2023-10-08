import React from 'react';
import './style/SituationImg.css';

function SituationImg({status}){
    if(status==='Safe') return(
      <div className='safe-img'/>
    )
    if(status==='Risky') return(
      <div className='LD-img'/>
    )
    return(
      <div className='HD-img'/>
    )
}

export default SituationImg