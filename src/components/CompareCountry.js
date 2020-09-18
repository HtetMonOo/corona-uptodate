import React from 'react'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';

import { Animation, EventTracker } from '@devexpress/dx-react-chart';


const CompareCountry = ({latest}) => {
    
    return (
        <Paper className="my-5 mx-auto" style={{width: 80+"%"}}>
        <Chart
            data={latest}
            rotated
        >
            <ArgumentAxis tickSize="2"/>
            <ValueAxis />

            <BarSeries
            valueField="total_cases"
            argumentField="name"
            color = "gray"
            />
            <Title text="Countries with the most Coronavirus cases" />
            <Animation />
            <EventTracker />
            <Tooltip />
        </Chart>
        </Paper>
    );
}

export default CompareCountry;
