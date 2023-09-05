import React, {useState} from 'react';
import './UserView.css';
import { Routes, Route, Link } from 'react-router-dom';
import SelectCountry from './Components/SelectCountry';
import CalendarGrid from './Components/CalendarGrid';
import Header from './Components/Header';

/* CHILD FROM APP */
/* PARENT FROM CALENDARGRID AND HEADER AND GRIDS(FRUITS AND VEGGIES) */

function UserView(props) {

    
    
    return (
    <div className="row d-flex justify-content-center">
           
       <Header setSelectedCountry={props.setSelectedCountry} selectedCountry={props.selectedCountry} />

        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <div className="row justify-content-center text-left pt-3">

            <CalendarGrid requestMonthCb={text => props.requestMonthCb(text)}
            requestMonth2Cb={text => props.requestMonth2Cb(text)} monthFruits={props.monthFruits}
            monthVeggies = {props.monthVeggies}
            selectedCountry={props.selectedCountry}/>

          </div>
        </div>
    </div>
    );
}

export default UserView;
