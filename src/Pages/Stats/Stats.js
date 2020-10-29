import React, { Component } from 'react';
import Chart from './Charts/barChart';
import IntersectionObserver from 'react-intersection-observer';
import './Stats.css';
import { getDefaultNormalizer } from '@testing-library/react';

class Stats extends Component{
  state = {
    charts: [
    ],
    totalUsers: '89'
  }

  componentDidMount() {
    fetch('http://192.168.10.108:8081/mainstats/charts')
      .then(response => response.json())
      .then(data => {this.setState({ charts: data })
    });
    fetch('http://192.168.10.108:8081/mainstats/usersactivos')
      .then(response => response.json())
      .then(data => {this.setState({ totalUsers: data })
    });
  }

  render() {
    let charts = null;
    charts = (
      <div>
        {this.state.charts.map((chart, index) => {
          return <Chart className="mappedChart"
          yAxis={chart.yAxis}
          xAxis={chart.xAxis}
          ChartName={chart.ChartName}
          key={chart.id}
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
          <p>Cantidad de usuarios activos de MediCare™: {this.state.totalUsers}</p>
          <p className='totalUsers'>{this.state.totalUsers}</p>
          {charts}
        </div>
      </div>
    );
  }
}

export default Stats;
