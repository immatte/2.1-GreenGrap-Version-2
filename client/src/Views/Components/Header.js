import React from "react";
import './Header.css';
import SelectCountry from "./SelectCountry";


/* PARENT FROM USERVIEW 
Check calendarGrid comments for lines 11-28
*/

function Header(props) {



  return (
        <div className="d-flex flex-nowrap justify-content-between m-0" id="containerApp">
          {/* <i className="bi bi-arrow-down-right-circle-fill"></i>
          <i className="bi bi-1-circle-fill"></i> */}
          <p className="h4" id="h2Subtitle">
            Vegetables for your season
          </p>
          <div>
            <SelectCountry 
              setSelectedCountry = {props.setSelectedCountry}  selectedCountry= {props.selectedCountry}      
              setCountryname = {props.setCountryname}  countryname = {props.countryname}
              countriesAcronyms = {props.countriesAcronyms}
            
            />
          </div>
        </div>
  );
}

export default Header;
