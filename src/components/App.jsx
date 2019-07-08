import React from 'react';
import Grid from './Grid';
import Navbar from './Navbar';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: 'Monday'
    }
  }
  render() {
    return(
      <div>
        <Navbar />
        <Grid currentDay={this.state.currentDay}/>
      </div>
    );
  }
}

export default App;
