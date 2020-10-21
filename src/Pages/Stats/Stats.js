import React, { Component } from 'react';
import Chart from './Charts/barChart';
import IntersectionObserver from 'react-intersection-observer';
import './Stats.css';

class Stats extends Component{
    state = {
        charts: [
          { id: 'asfa1', ChartName: 'Sample chart 1', ChartDesc: 'Tu viejaaaaaa', xAxis: ['aaa', 'Sample 2', 'Sample 3', 'sasfdsaf'], yAxis: [30000, 400, 11, 44]},
          { id: 'asfa2', ChartName: 'Sample chart 2', ChartDesc: 'Tu viejaaaaaa es', xAxis: ['Sample 1', 'Sample 2', 'Sample 3'], yAxis: [800000, 300, 1184423]},
          { id: 'asfa3', ChartName: 'Sample chart 3', ChartDesc: 'nooo que estás mirando', xAxis: ['Sample 1', 'Sample 2', 'Sample 3'], yAxis: [90, 600, 118]},
        ],
        totalUsers: '89'
      }

      render() {
        console.log(this.state);
        let charts = null;
       
        charts = (
          <div>
            {this.state.charts.map((chart, index) => {
              return <Chart className="mappedChart"
              key={chart.id}
              ChartName={chart.ChartName}
              ChartDesc={chart.ChartDesc}
              xAxis={chart.xAxis}
              yAxis={chart.yAxis}
              />
            })}
          </div>
        );

        const animationCharts = document.querySelectorAll('.mappedChart');
        let observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('transition');
            } else {
              entry.target.classList.remove('transition');
            }
          });
        });


        return (
          <div className="Stats">
            <div className="wrapper1">
              <h1>¿Por qué elegirnos?</h1>
              <p>Esta es una representación de la eficiencia y automatización que podemos lograr</p>
            </div>
            <div className="banner1"></div>
            <div className="chartsContainer">
              <p>Cantidad de usuarios totales de MediCare™</p><br/>
              <p className='totalUsers'>{this.state.totalUsers}</p>
              {charts}
            </div>
          </div>
        );
      }
}

export default Stats;
