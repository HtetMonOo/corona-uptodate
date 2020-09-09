import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  SplineSeries,
  Legend,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';

import { ValueScale, Animation, ArgumentScale, EventTracker } from '@devexpress/dx-react-chart';
import { scaleTime } from 'd3-scale';
import { sales as data } from '../../../demo-data/data-vizualization';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data[2017],
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentScale factory={scaleTime} />
          <ArgumentAxis />
          <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
          {/* <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks /> */}



          <SplineSeries
            name="Total Transactions"
            valueField="total"
            argumentField="date"
            scaleName="total"
          />

          <SplineSeries
            name="Total Transactions"
            valueField="total"
            argumentField="date"
            scaleName="total"
          />
          <Animation />
          <EventTracker />
          <Tooltip />
          
          <Legend />
        </Chart>
      </Paper>
    );
  }
}
