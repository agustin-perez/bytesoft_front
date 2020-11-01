import React, { Component } from 'react';
import Chart from './Charts/barChart';
import './MediCare.css';
import logo from './Media/Medicare negro.png';
import minLogo from  './Media/Medicare negro responsive.png';

class MediCare extends Component{
  state = {
    charts: [
      {"yAxis":[2, 1],"xAxis":["", " "],"ChartName":"","id":"0A"},
      {"yAxis":[2, 1],"xAxis":["", " "],"ChartName":"","id":"0B"},
      {"yAxis":[2, 1],"xAxis":["", " "],"ChartName":"","id":"0C"},
      {"yAxis":[2, 1],"xAxis":["", " "],"ChartName":"","id":"0D"}
    ],
    totalUsers: (0/0),
    isloading: true
  }

  async componentDidMount() {
    let response = await fetch('https://statsapi.bytesoft.com.uy/backend/charts');
    let body = await response.json();
    this.setState({ charts: body, isLoading: true });

    response = await fetch('https://statsapi.bytesoft.com.uy/backend/usersactivos');
    body = await response.json();
    this.setState({ totalUsers: body, isLoading: false });
  
    document.title="MediCare";
  }

  render() {
    if (this.state.isLoading) {
      return(
        <div className="Stats">
          <div className="wrapper1">
            <h1><img className="medicareLogo" src={logo} alt="Logo"/></h1>
          </div>
          <div className="wrapper2">
          <p className='userText'>Cargando datos...</p>
        </div>
      </div>
      )
    }

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

    let responsiveLogo = logo;
    if (window.matchMedia('(max-width: 1000px)').matches){
      responsiveLogo = minLogo;
    }


    return (
      <div className="Stats">
        <div className="wrapper1">
          <h1><img className="medicareLogo" src={responsiveLogo} alt="Logo"/></h1>
        </div>
        <div className="wrapper2">
        <p className='userText'>Cantidad de usuarios activos de MediCare™</p>
        <p className='totalUsers'>{this.state.totalUsers}</p>
        <div className="chartContainer">
          {charts}
        </div>
      </div>
    </div>
    );
  }
}

export default MediCare;
