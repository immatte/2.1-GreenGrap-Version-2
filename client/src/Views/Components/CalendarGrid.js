import React, { useEffect } from 'react';
import './CalendarGrid.css';
import { useState } from 'react';
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
    const [ classes, setClasses ] = useState(false);
    // console.log(props.selectedCountry)

    // We select a country, and after clicking on a month button it's displaying its grids.
    // But then, we want to select another country, so we change THE SELECTED COUNTRY in the select bar.
    // Now, we are still seeing the grids of the previos selected country but... we don't want that.
    // we need to return the state to -1, where no month is active (and so any grid is displaying). 
    console.log(classes)
    useEffect (() => {
        setActive(-1)
    }, [props.selectedCountry]);

    const handleClick = month => {
        props.requestMonth2Cb(month);
        props.requestMonthCb(month);
        setActive(month);
        setfeatVisible(EMPTY_FORM);
        setClasses(false);
        // console.log(yearcalendar[month]) //just testing
    };

    const handleChangeView = (isFruits) => {
        setIsFruits(isFruits);
        setfeatVisible(EMPTY_FORM);
        setClasses(false);
    }

    //array of the Month used in handleClick function
    let yearcalendar = ['January','February','March','April','May','June','July','August','September','October','November','December']

        const EMPTY_FORM = {
        country_fk: '',
        id: 0,
        month_fk: '',
        veggie_name: '',
        veggie_type: '',
        veggie_url: '',
        veggie_fk: '',
    };

  const [featVisible, setfeatVisible] = useState(EMPTY_FORM);
  const handleVeggieDetails = (event) => {
    let featVisible = event.target.alt;
    let featVeggie = props.monthVeggies.find(veggie => (veggie.veggie_name===featVisible))
    setfeatVisible(featVeggie);
    setClasses(true)
    console.log(featVeggie)
    };

    const handleFruitDetails = (event) => {
        let featVisible = event.target.alt;
        let featFruit = props.monthFruits.find(fruit => (fruit.fruit_name===featVisible))
        setfeatVisible(featFruit);
        setClasses(true)
        console.log(featFruit)
        };
    console.log(props.monthFruits)

    return (
    <div className="row d-flex justify-content-center" id="All">
        <div className='background'>
            <h2> Click to find your Month veggies ! </h2>
               {(props.selectedCountry)&&
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
                </div>}
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
        {(!isFruits)&&(featVisible)&&(
            
            <ul className={classes? 'featVisibleVeggie':''}>
                <img className={classes?'featVeggieImg': ''} src={featVisible.veggie_url} alt={featVisible.veggie_name}/>
                <div className={classes?'featVeggieText': ''}>
                    <h3 className={classes?'featVeggieTitle': ''} >{featVisible.veggie_name}</h3>
                    <p>{featVisible.veggie_description}</p>
                </div>
            </ul>
            
            )}
        {(isFruits)&&(featVisible)&&(
            <ul className={classes?'featVisibleFruit':''}>
                <img className={classes?'featFruitImg':''} src={featVisible.fruit_url} alt={featVisible.fruit_name}/>
                <div className={classes?'featFruitText': ''}>
                    <h3 className={classes?'featFruitTitle': ''}>{featVisible.fruit_name}</h3>
                    <p>{featVisible.fruit_description}</p>
                </div>
            </ul>
        )}
      {(isFruits)
           ? <FruitsGrid monthFruits = {props.monthFruits}
                handleFruitDetailsCb={fruit => handleFruitDetails(fruit)}
                featVisible = {props.featVisible}
                setfeatVisible={props.setfeatVisible}
                />
           : <VeggiesGrid 
                monthVeggies = {props.monthVeggies}
                handleVeggieDetailsCb={veggie => handleVeggieDetails(veggie)}
                featVisible = {props.featVisible}
                setfeatVisible={props.setfeatVisible}

                />
            
      }
           </div>
            )}
      
    </div>
    );
}

export default CalendarGrid;
