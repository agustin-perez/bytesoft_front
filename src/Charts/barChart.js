import { render } from '@testing-library/react';
import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from 'react-vis';
import "./Charts.css";

const barChart = ( props ) => 
{
    const axisData = []
    for (var i = 0; i < props.xAxis.length; i++){
      axisData[i] = {x: props.xAxis[i], y: props.yAxis[i]};
    }
    const labelData = axisData.map((d, idx) => ({
      x: d.x,
      y: Math.max(axisData[idx].y, axisData[idx].y)
    }));
    const size=500;
    const leftPadding=size/8;
    return (
      <div className="ChartDiv" onClick={props.click}>
        <p><b>{props.ChartName}</b></p>
        <div className="ChartItself">
          <XYPlot margin={{bottom: 50, left: leftPadding}} xType="ordinal" width={size} height={size/2} animation={true}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis tickSize={5} tickPadding={0}/>
            <VerticalBarSeries className="bar" animation={true} data={labelData}/>           
          </XYPlot>
        </div>
      </div>
    );
}

export default barChart;