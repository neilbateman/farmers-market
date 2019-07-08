import React from 'react';
import Grid from './Grid';
import Navbar from './Navbar';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: 'Monday'
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(newDay){
    this.setState({currentDay: newDay});
    // eslint-disable-next-line no-console
    console.log(this.state.currentDay);
    
  }
  render() {
    return(
      <div>
        <Navbar onDayClick={this.handleDayClick}/>
        <Grid currentDay={this.state.currentDay} />
      </div>
    );
  }
}

export default App;
