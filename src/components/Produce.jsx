import React from 'react';

function Produce(props){
  return (
    <div>
      <h4>{props.month}</h4>
      {props.selection.map((item)=>
        <p>{item}</p>
      )}
    </div>
  );
}

export default Produce;
