import React from 'react';
import './style/Todo.css';
import Title from './Title';
import SolarWindData from './DataMiner';

function Todo() {
  return (
    <div className='todo-block'>
        <Title title="Recommendations"/>
        <div className="todo" id='todo'>
            <SolarWindData/>
        </div>
    </div>
          
  );
}

export default Todo;