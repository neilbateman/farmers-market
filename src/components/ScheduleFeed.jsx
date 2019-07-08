/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import MarketSchedule from './MarketSchedule';
import {Schedule} from '../store';


export default class ScheduleFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Schedule,
    };
    this.getScheduleByDay = this.getScheduleByDay.bind(this);
  }

  getScheduleByDay() {
    return this.state.Schedule.filter(item => item.day === this.props.currentDay);
  }

  render(){
    return (
      <div className="times">
        {this.getScheduleByDay().map((times, index)=>
          <MarketSchedule   day={times.day}
            location={times.location}
            hours={times.hours}
            booth={times.booth}
            key={index} />
        )}
      </div>
    );
  }

}
