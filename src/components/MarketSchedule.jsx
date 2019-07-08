import React from 'react';
import PropTypes from 'prop-types';

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

MarketSchedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default MarketSchedule;
