import React from 'react'
import "./company.css";
import Logo from '../customLogo/Logo';
import plants from "../images/plants.png";
import petrol from "../images/petrol.png";
import hotel from "../images/hotel.png";
function Company() {
  return (
    <div className='company'>
        <div className='mtext' >Group Company</div>
        <Logo />
        <div className='icnt'>
            <img src={plants} className='cimgs'/>
            <img src={petrol} className='cimgs s'/>
            <img src={hotel} className='cimgs'/>
        </div>
    </div>
  )
}

export default Company