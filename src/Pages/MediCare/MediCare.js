import React, { Component } from 'react';
import Chart from './Charts/barChart';
import './MediCare.css';
import logo from './Media/medicare.png';

class MediCare extends Component{
  state = {
    charts: [
    ],
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
    document.title="MediCare";
  }

  render() {
    let charts = (
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

    return (
      <div className="Stats">
        <div className="wrapper1">
          <h1><img className="medicareLogo" src={logo} alt="Logo"/></h1>
        </div>
        <div className="chartsContainer">
        <p className='userText'>Cantidad de usuarios activos de MediCare™</p>
        <p className='totalUsers'>{this.state.totalUsers}</p>
        {charts}
      </div>
    </div>
    );
  }
}

export default MediCare;
