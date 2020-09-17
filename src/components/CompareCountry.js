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

import { Animation } from '@devexpress/dx-react-chart';


const CompareCountry = ({latest}) => {
    
    return (
        <Paper>
        <Chart
            data={latest}
            rotated
        >
            <ArgumentAxis />
            <ValueAxis />

            <BarSeries
            valueField="total_cases"
            argumentField="name"
            />
            <Title text="World population" />
            <Animation />
            <Tooltip />
        </Chart>
        </Paper>
    );
}

export default CompareCountry;
