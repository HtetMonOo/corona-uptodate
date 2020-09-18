import { Button } from '@material-ui/core';
import React from 'react'

const getMonth = monthNo => {
  const months = [ "Janary", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December" ];
  return months[monthNo];
}

const Navbar = ({latest}) => {

    const total = latest.total_cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    const death = latest.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    const date = latest.date.getDay()+" "+getMonth(latest.date.getMonth())+" "+latest.date.getFullYear();
    return (
        <div className="Navbar">
            <div className="w-100 d-flex justify-content-between mt-3">
                <div className="navBut p-2 ml-3 rounded">Corona UTD</div>
                <div className="navBut p-2 mr-3 rounded">About</div>
            </div>
            <div className="py-4 px-6">
                <h4>Globally, {date}, there have been <span className="text-dark">{total} confirmed cases</span> of COVID-19, including <span className="text-dark">{death} deaths</span>.</h4>
            </div>
        </div>
    )
}

export default Navbar;
