import React, { useState } from 'react';
import './style/Title.css'

function Title({title}) {
  return(
    <div className="title">
        <h1>{title}</h1>
    </div>
  )
}

export default Title;