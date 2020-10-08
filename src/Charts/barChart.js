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
    const BarSeries = VerticalBarSeries;
    return (
      <div className="ChartDiv" onClick={props.click}>
        <p><b>{props.ChartName}</b></p>
        <div className="ChartItself">
          <XYPlot xType="ordinal" width={500} height={400} xDistance={200}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <BarSeries data={axisData} />
          </XYPlot>
        </div>
      </div>
    );
}

export default barChart;