import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

const labelData = blueData.map((d, idx) => ({
  x: d.x,
  y: Math.max(blueData[idx].y, blueData[idx].y)
}));
const BarSeries = VerticalBarSeries;


const charts = ( props ) => {
    return (
      <div>
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries data={blueData} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
      </div>
    );
}

export default charts;