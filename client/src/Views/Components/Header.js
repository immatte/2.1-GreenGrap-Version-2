import React from "react";
import './Header.css';
import SelectCountry from "./SelectCountry";


/* PARENT FROM USERVIEW 
Check calendarGrid comments for lines 11-28
*/

function Header(props) {



  return (
         <div className="d-flex flex-nowrap justify-content-between m-0" id="containerApp">
        <p className="h4" id="h2Subtitle">
          Vegetables for your season
        </p>
        <div>
          <SelectCountry setSelectedCountry = {props.setSelectedCountry} selectedCountry= {props.selectedCountry}/>
        </div>
        </div>
  );
}

export default Header;
