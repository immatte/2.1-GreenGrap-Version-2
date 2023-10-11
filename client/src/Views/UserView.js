import React, {useState} from 'react';
import './UserView.css';
import { useParams } from 'react-router-dom';
import CalendarGrid from './Components/CalendarGrid';
import RecipesView from './RecipesView';
import Header from './Components/Header';

/* CHILD FROM APP */
/* PARENT FROM CALENDARGRID AND HEADER AND GRIDS(FRUITS AND VEGGIES) */

function UserView(props) { 


    return (
    <div className="row d-flex justify-content-center">
        <Header        
            setSelectedCountry={props.setSelectedCountry} 
            selectedCountry={props.selectedCountry} 
            setCountryname= {props.setCountryname}
            countryname= {props.countryname}
            countriesAcronyms = {props.countriesAcronyms}
        />
        <CalendarGrid 
            setCountryVeggies = {props.setCountryVeggies} countryVeggies = {props.countryVeggies}
            requestMonthCb={text => props.requestMonthCb(text)}
            requestMonth2Cb={text => props.requestMonth2Cb(text)} monthFruits={props.monthFruits}
            monthVeggies={props.monthVeggies}
            selectedCountry={props.selectedCountry}
            countryname= {props.countryname}
            countriesAcronyms = {props.countriesAcronyms}
        />
    </div>
    );
}

export default UserView;
