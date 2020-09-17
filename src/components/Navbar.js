import React, { useState } from 'react'
import { createMuiTheme, colors } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

const getMonth = monthNo => {
  const months = [ "Janary", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December" ];
  return months[monthNo];
}

const Navbar = ({latest}) => {

  const [ mode, setMode ] = useState("light");

    const total = latest.total_cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    const death = latest.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    const date = latest.date.getDay()+" "+getMonth(latest.date.getMonth())+" "+latest.date.getFullYear();
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: "#e3f2fd"}}>
            <a className="navbar-brand" href="#">Corona UTD</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="py-4 px-6">
                <h4>Globally, {date}, there have been <span className="text-dark">{total} confirmed cases</span> of COVID-19, including <span className="text-dark">{death} deaths</span>.</h4>
            </div>
        </div>
    )
}

export default Navbar;
