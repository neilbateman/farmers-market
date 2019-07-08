import React from 'react';
import Produce from './Produce';
import {MasterProduceList} from '../store';



// export default function CustomizedExpansionPanels() {

export default class  AvailableProduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MasterProduceList,
    };
  }

  render() {
    return (
      <div>
        {this.state.MasterProduceList.map((produce, index)=>
          <Produce month={produce.month}
            selection= {produce.selection}
            key={index}
          />
        )}
      </div>
    );
  }
}
