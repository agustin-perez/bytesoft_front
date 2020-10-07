import React, { Component } from 'react';
import './App.css';
import Chart from './Charts/Charts';


class App extends Component {
  state = {
    charts: [
      { id: 'asfa1'},
      { id: 'asfa2'},
      { id: 'asfa3'},
      { id: 'asfa4'},
      { id: 'asfa5'}
    ],
  }

  render () {
    let charts = null;
    charts = (
      <div>
        {this.state.charts.map((chart, index) => {
          return <Chart key={chart.id}/>
        })}
      </div>
    );
    return (
      <div className="App">
        {charts}
      </div>
    );
  }
}

export default App;