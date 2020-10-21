import React, { Component } from 'react';
import Chart from './Charts/barChart';

import './Charts/Charts.css';

class Stats extends Component{
    state = {
        charts: [
          { id: 'asfa1', ChartName: 'Sample chart 1', ChartDesc: 'Tu viejaaaaaa', xAxis: ['aaa', 'Sample 2', 'Sample 3', 'sasfdsaf'], yAxis: [30000, 400, 11, 44]},
          { id: 'asfa2', ChartName: 'Sample chart 2', ChartDesc: 'Tu viejaaaaaa es', xAxis: ['Sample 1', 'Sample 2', 'Sample 3'], yAxis: [800000, 300, 1184423]},
          { id: 'asfa3', ChartName: 'Sample chart 3', ChartDesc: 'nooo que estás mirando', xAxis: ['Sample 1', 'Sample 2', 'Sample 3'], yAxis: [900, 600, 118]},
        ],
      }
    
      chartClick = (index) => {
        
      }
    
      render() {
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
            <div className="chartsCard">
              <h1>Estas son nuestras estadísticas principales:</h1>
                <div className="chartsContainer">{charts}</div>
            </div>
          </div>
        );
      }
}

export default Stats;
