import React from 'react';

function MarketSchedule(props){
  return (
    <div>
      <h4>{props.day}</h4>
      <h5>{props.location}</h5>
      <h5>{props.hours}</h5>
      <h5>{props.booth}</h5>
    </div>
  );
}

export default MarketSchedule;
