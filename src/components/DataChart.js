import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, Title, Legend, SplineSeries, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import {
  ArgumentScale, Stack, Animation, EventTracker, HoverState, SelectionState, ValueScale, Palette
} from '@devexpress/dx-react-chart';
import { scaleTime } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import SideData from './SideData';
import { getByCountry } from '../.utils';
import { formatData } from '../funcAndStyles/func';
import { tooltipContentBodyStyle, tooltipContentTitleStyle } from './styles';
import Duration from './Duration';
import Loader from './Loader';

const getMonth = monthNo => {
  const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  return months[monthNo];
}


const Root = withStyles({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
})

(({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
));

const Label = withStyles({
  label: {
    whiteSpace: 'nowrap',
  },
})(({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
));

const TitleText = withStyles({ title: { marginBottom: '30px' } })(({ classes, ...restProps }) => (
  <Title.Text {...restProps} className={classes.title} />
));

const compareTargets = (
  { series, point }, { series: targetSeries, point: targetPoint },
) => series === targetSeries && point === targetPoint;



const DataChart = ({globalData, countries, classes}) => {
  
  const [ pending, setPending ] = useState(false);
  const [ data, setData ] = useState(globalData);
  const [ hover, setHover ] = useState({point: 0, series: "total_cases"});
  const [selection, setSelection] = useState([]);
  const [tooltipTarget, setTooltipTarget] = useState(null);
  const [ country, setCountry ] = useState('Global');
  const [ duration, setDuration ] = useState("year");
  const [state, setState] = useState({
    cases: true,
    deaths: false,
    recover: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const TooltipContent = (props) => {
  const { targetItem, text, ...restProps } = props;
  const cases = targetItem.series === "total_cases" ? "cases" : targetItem.series === "deaths" ? "deaths" : "recovered";

  
  if(targetItem){
  return (
    <div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentTitleStyle}
          text={data[targetItem.point][targetItem.series]}
        />
      </div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentBodyStyle}
          text={cases}
        />
      </div>
      
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentBodyStyle}
          text={"on "+getMonth(data[targetItem.point].date.getMonth())+"-"+data[targetItem.point].date.getDate()}
        />
      </div>
    </div>
  );}
  return (<div></div>);
};

    const click = ({ targets }) => {
      console.log(targets);
      const target = targets[0];
      if (target) {
        console.log(selection)
        setSelection( selection[0] && compareTargets(selection[0], target) ? [] : [target] );
      }
    };
    const changeHover = hoverValue => {
      setTooltipTarget(hoverValue)
      setHover(hoverValue)
    };
    const changeTooltip = targetItem => setTooltipTarget(targetItem);

    const clearSelection = () => setSelection([]);
   
    const selectCountry = (country) => {
      setCountry(country);
    }
  
    const selectDuration = (duration) => {
      setDuration(duration);
    }

    const getDataByCountry = async(country, duration) => {
      setPending(true);
      try {
        const res = await Axios.get(getByCountry(country.label, duration));
        setData(formatData(res.data.data));
        setPending(false);
      }
      catch {
        console.log("the catch"+duration);
        switch(duration){
          case 'week': setData(globalData.slice(0, 8)); break;
          case 'month': {setData(globalData.slice(0, 31)); console.log(globalData.slice(0,31));} break;
          case 'year': setData(globalData); break;
          default : setData(globalData);
        }
        setPending(false);
      }
    }

    useEffect(()=>{
      getDataByCountry(country, duration);
    }, [ country, duration ])
    return (
       <>
       {
          data.length !== 0 &&
       <div className="d-flex justify-content-around mx-auto" style={{width: 90+"%"}}>
        <SideData className="w-40" classes={classes} selection={selection} hover={hover} data={data} country={country} selectCountry={selectCountry} state={state} handleChange={handleChange} countries={countries}/>
        <Paper style={{width: 60+"%"}}>
          <Duration duration={duration} selectDuration={selectDuration}/>
          {
            pending ? <Loader /> :
              <Chart
            data={data}
            className={classes.chart}
          >
            <ArgumentScale factory={scaleTime} />
            <ArgumentAxis />
            <ValueAxis />
            {
              state.cases &&
              <SplineSeries
              name="total_cases"
              valueField="total_cases"
              argumentField="date"
              color="yellow"
            />
            }
            {
              state.deaths &&
              <SplineSeries
              name="deaths"
              valueField="deaths"
              argumentField="date"
              color="red"
            />
            }
            {
              state.recover &&
              <SplineSeries
              name="recovered"
              valueField="recovered"
              argumentField="date"
              color="green"
            />
            }
            <Stack />
            <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
            <EventTracker onClick={click} />
            <HoverState hover={hover} onHoverChange={changeHover} />
            {
              tooltipTarget &&
              <Tooltip
              targetItem={tooltipTarget}
              onTargetItemChange={changeTooltip}
              contentComponent={TooltipContent}
            />
            }
            <SelectionState selection={selection} />
          </Chart>
          }
             
      </Paper>
      </div> 
        }
      </>
        
    ) 
}

export default withStyles(styles)(DataChart);
