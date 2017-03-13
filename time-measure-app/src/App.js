import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TimeChart } from './Components/Chart.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.onDestinationHostChange = this.onDestinationHostChange.bind(this);
    this.onTimesChange = this.onTimesChange.bind(this);
    this.checkTimes = this.checkTimes.bind(this);
  }

  onDestinationHostChange(e) {
    this.setState({
      destinationHost: e.target.value
    });
  };

  onTimesChange(e) {
    this.setState({
      times: e.target.value
    });
  };

  checkTimes() {
        console.log("Call service.");
        // var mockData = [
        //         {name: 'Page A', uv: 5000, pv: 9400, amt: 1200},
        //         {name: 'Page B', uv: 6000, pv: 8398, amt: 2310},
        //         {name: 'Page C', uv: 7000, pv: 7800, amt: 3490},
        //         {name: 'Page D', uv: 8780, pv: 6908, amt: 4500},
        //         {name: 'Page E', uv: 9890, pv: 5800, amt: 5681},
        //         {name: 'Page F', uv: 1390, pv: 4800, amt: 6400},
        //         {name: 'Page G', uv: 2490, pv: 3300, amt: 2200},
        //     ];
            

        // this.setState({
        //     data: mockData
        // });

        // TimeChart.updateBarchar(this.state.data);        
    };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Time measure App</h2>
        </div>
        <div className="App-intro">
          <form>
            <label htmlFor="destinationHost" >URL:</label>
            <input id="destinationHost" value={this.state.destinationHost} onChange={this.onDestinationHostChange} />
            <label htmlFor="destinationHost" >Number of calls:</label>
            <input id="destinationHost" value={this.state.times} onChange={this.onTimesChange} />
            <button type="button" onClick={this.checkTimes}>Check response time</button>
          </form>
          <TimeChart/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  destinationHost: React.PropTypes.string,
  times: React.PropTypes.number,
  data: React.PropTypes.array
};

App.defaultProps = {
  destinationHost: '',
  times: 1,
  data: [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ]
};

export default App;
