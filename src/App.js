import React, { Component } from 'react';
import './App.css';
import Chart from './Charts/barChart';

class App extends Component {
  state = {
    charts: [
      { id: 'asfa1', ChartName: 'Tu', ChartDesc: 'Tu viejaaaaaa', xAxis: ['aaa', 'Sample 2', 'Sample 3', 'sasfdsaf'], yAxis: [3000000, 400, 11, 44]},
      { id: 'asfa1', ChartName: 'Vieja', ChartDesc: 'Tu viejaaaaaa es', xAxis: ['Sample 1', 'Sample 2', 'Sample 3'], yAxis: [800, 300, 118]},
      { id: 'asfa1', ChartName: 'Es', ChartDesc: 'nooo que estás mirando', xAxis: ['Sample 1', 'Sample 2', 'Sample 3'], yAxis: [900, 600, 118]},
      { id: 'asfa1', ChartName: 'Re', ChartDesc: 'Chinchulín', xAxis: ['Sample 1', 'Sample 2', 'Sample 3'], yAxis: [700, 500, 11]}
    ],
  }

  chartClick = (index) => {
    
  }

  render () {
    console.log(this.state);
    let charts = null;
    charts = (
      <div>
        {this.state.charts.map((chart, index) => {
          return <Chart 
          key={chart.id}
          ChartName={chart.ChartName}
          ChartDesc={chart.ChartDesc}
          xAxis={chart.xAxis}
          yAxis={chart.yAxis}
          />
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