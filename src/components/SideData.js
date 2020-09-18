import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Country from './Country';
import { Paper } from '@material-ui/core';

const getMonth = monthNo => {
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return months[monthNo];
  }

const SideData = ({classes, hover, selection, data, country, selectCountry, state, handleChange, countries}) => {

  const format = (raw) => {
    return (raw.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
  }
  const selected = selection[0];
  if (!hover) {
    var point = selected ? selected.point : 0;
  }else {
    point = hover.point;
  }
  const active = data[point]["active_cases"];
  const recoveryRatio = data[point]["recovery_ratio"].toString().slice(0, 4);
  const deathRatio = data[point]["death_ratio"].toString().slice(0,4);
  const death = data[point]["deaths"];
  const confirmed = data[point]["total_cases"];
  const recovered = data[point]["recovered"];
  const newDeath = data[point+1] ? death- data[point+1]["deaths"] : "0";
  const newCase = data[point+1] ? confirmed - data[point+1]["total_cases"] : "0";
  const newRecover = data[point+1] ? recovered - data[point+1]["recovered"] : "0";
  const date = data[point].date;
  const latest = (point===0) ? "(Latest)" : "";
  const { cases, deaths, recover } = state;
  
    return (
        <div className="SideData">
            <div className={classes.group}>
                <Country country={country} selectCountry={selectCountry} countries={countries}/>
                <div className={classes.hoverGroup}>
                <div className={classes.text}>
                <div className="mt-3">
                      <h4 className="mb-3">{`${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()} ${latest}`}</h4>
                        <h5><Checkbox checked={cases} onChange={event => handleChange(event)} name="cases" />Confirmed Cases</h5>
                        <div className="bg-warning text-dark d-flex justify-content-around align-items-center mb-4 px-3 rounded">
                          <h2 className="my-2">{format(confirmed.toString())}</h2>
                          <h5 className="m-0">(+{format(newCase.toString())})</h5>
                        </div>
                        
                        <h5><Checkbox checked={deaths} onChange={event => handleChange(event)} name="deaths" />Confirmed Deaths</h5>
                        <div className="bg-danger text-dark d-flex justify-content-around align-items-center mb-4 px-3 rounded">
                          <h2 className="my-2">{format(death.toString())}</h2>
                          <h5 className="m-0">(+{format(newDeath.toString())})</h5>
                        </div>

                        <h5><Checkbox checked={recover} onChange={event => handleChange(event)} name="recover" />Confirmed Recovers</h5>
                        <div className="bg-success text-dark d-flex justify-content-around align-items-center mb-4 px-3 rounded">
                          <h2 className="my-2">{format(recovered.toString())}</h2>
                          <h5 className="m-0">(+{format(newRecover.toString())})</h5>
                        </div>

                        <h5>Active Cases - {format(active.toString())}</h5>
                        <h5>Death Ratio - {deathRatio}</h5>
                        <h5>Recovery Ratio - {recoveryRatio}</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default SideData;
