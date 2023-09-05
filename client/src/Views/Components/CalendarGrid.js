import React, { useEffect } from 'react';
import './CalendarGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import VeggiesGrid from './VeggiesGrid';
import FruitsGrid from './FruitsGrid';

/* CHILD OF USERVIEW 
--> Lines 31-35 (lines changes I guess) are creating a grid of Months(y) from the array of "yearcalendar" 
--> the function handleclick() is recovering the index of the Month clicked on, and 
comparing it to the ID of the Month selected from table "calendar"(requestMonthCb). 
See lines 13-28 (lines changes I guess) from App. 
*/

function CalendarGrid(props) {
    // When clicking on a month, we make it active. We start at -1 because 0 has already the first month
    const [ active, setActive ] = useState(-1); //to make one month active
    const [ isFruits, setIsFruits ] = useState(false); //display veggies by default

    // We select a country, and after clicking on a month button it's displaying its grids.
    // But then, we want to select another country, so we change THE SELECTED COUNTRY in the select bar.
    // Now, we are still seeing the grids of the previos selected country but... we don't want that.
    // we need to return the state to -1, where no month is active (and so any grid is displaying). 
    useEffect (() => {
        setActive(-1)
    }, [props.selectedCountry]);

    const handleClick = month => {
        props.requestMonth2Cb(month);
        props.requestMonthCb(month);
        setActive(month);
        console.log(yearcalendar[month]) //just testing
    };

    const handleChangeView = (isFruits) => {
        setIsFruits(isFruits);
    }

    //array of the Month used in handleClick function
    let yearcalendar = ['January','February','March','April','May','June','July','August','September','October','November','December']

    return (
    <div className="row d-flex justify-content-center" id="All">
        <div className='background'>
            <h2> Click to find your Month veggies ! </h2>
               
                <div id='months'>
                    {/* First Part : Calendar Grid buttons*/}
                    {
                        yearcalendar.map((y, index) => (
                             <div key={y}
                            onClick={() => handleClick(index+1)}
                            className={`monthsbox ${active === index+1 ? 'active' : null}`}>
                            {y}                        
                            </div>
                        ))
                    }
                </div>

        </div>


        {/* IF A MONTH BUTTON IS CLICKED-ON, THEN DISPLAY THE NAVBAR OF VEGGIES OR FRUITS. AND DISPLAY VEGGIES GRID BY DEFAULT */}
        {(active>-1) && (
        <div>
           <nav className="ForV">
                <div className= {`navItem ${!isFruits ? 'active' : null}`} 
                     onClick={()=>handleChangeView(false)}>Veggies</div>
                <div className= {`navItem ${isFruits ? 'active' : null}`}
                     onClick={()=> handleChangeView(true)}>Fruits</div>
            </nav>
      {(isFruits )
           ? <FruitsGrid monthFruits = {props.monthFruits}/>
           : <VeggiesGrid monthVeggies = {props.monthVeggies}/>
      }
           </div>
            )}
      
    </div>
    );
}

export default CalendarGrid;
