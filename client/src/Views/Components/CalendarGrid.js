import React, { useEffect } from 'react';
import './CalendarGrid.css';
import { useState } from 'react';
import VeggiesGrid from './VeggiesGrid';
import FruitsGrid from './FruitsGrid';
import { Link, useNavigate, useParams } from 'react-router-dom';




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
    // const { monthId, countryId } = useParams();
    const params = useParams();
    const navigate = useNavigate();
    console.log(params, "CalendarGrid")


    // console.log(props.selectedCountry)

    // We select a country, and after clicking on a month button it's displaying its grids.
    // But then, we want to select another country, so we change THE SELECTED COUNTRY in the select bar.
    // Now, we are still seeing the grids of the previos selected country but... we don't want that.
    // we need to return the state to -1, where no month is active (and so any grid is displaying). 
    useEffect (() => {
        // props.getAllVeggiesCb()
        props.requestMonth2Cb(params.monthId);
        props.requestMonthCb(params.monthId);
        props.setSelectedCountry(params.countryId)
    }, [params.monthId]);
    

    useEffect (() => {
        setActive(-1)
    }, [params.countryId, props.selectedCountry]);

    
    
    console.log("fruits", props.month)
    
    const handleClick = month => {
        props.requestMonth2Cb(month);
        props.requestMonthCb(month);
        setActive(month);
        setfeatVisible(EMPTY_FORM);
        setClasses(false);
    };
    //When clicking on Veggie or Fruit button
    const handleChangeView = (isFruits) => {
        setIsFruits(isFruits);
        setfeatVisible(EMPTY_FORM);
        setClasses(false);
        if(isFruits){
            navigate(`/${params.countryId}/${params.monthId}/fruits`);
        }
        if(!isFruits){
            navigate(`/${params.countryId}/${params.monthId}/veggies`);
        }
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
    const monthVeggies = props.countryVeggies.filter(v => v.month_fk === `${params.monthId}`)
  
  const [featVisible, setfeatVisible] = useState(EMPTY_FORM);

  // When clicking on a Veggie image
  const handleVeggieDetails = (event) => {
    let featVisible = event.target.alt;
    let featVeggie = monthVeggies.find(veggie => (veggie.veggie_name===featVisible))
    console.log("featVeggie", featVeggie)
    setfeatVisible(featVeggie);
    setClasses(true)
    navigate(`/${params.countryId}/${params.monthId}/veggies/${featVeggie.id}`);


    };
    // When clicking on a Fruit image
    const handleFruitDetails = (event) => {
        let featVisible = event.target.alt;
        let featFruit = props.monthFruits.find(fruit => (fruit.fruit_name===featVisible))
        setfeatVisible(featFruit);
        setClasses(true)
        navigate(`/${params.countryId}/${params.monthId}/fruits/${featFruit.id}`);
        };
        console.log(params.countryId)
    
    console.log("countries", props.countries)
    console.log("params.countryId", params.countryId)
    
    const countryName = props.countries.find(country => (+country.id === +params.countryId))
    

        console.log("countryName", countryName)

    return (
        
        <div className="row d-flex justify-content-center" id="All">
            <div className='background'>
                {(countryName)&&
                    <h1> Checking the seasonal veggies in {countryName.country_name} </h1> 
                }
                <h2> Click to find your Month veggies ! </h2>
                {(params.countryId)&&
                    <div id='months'>
                        {/* First Part : Calendar Grid buttons*/}
                        {
                            yearcalendar.map((y, index) => (
                                <Link to={!isFruits ? `/${params.countryId}/${index+1}/veggies`:`/${params.countryId}/${index+1}/fruits`} >
                                    <div key={y}
                                        onClick={() => handleClick(index+1)}
                                        className={`monthsbox ${active === index+1 ? 'active' : null}`}>
                                        {y}                        
                                    </div>
                                </Link>
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
                {/* CLICK ON VEGGIE */}
                {(!isFruits)&&(featVisible)&&(
                    
                    <ul className={classes? 'featVisibleVeggie':''}>
                        <img className={classes?'featVeggieImg': ''} src={featVisible.veggie_url} alt={featVisible.veggie_name}/>
                        <div className={classes?'featVeggieText': ''}>
                            <h3 className={classes?'featVeggieTitle': ''} >{featVisible.veggie_name}</h3>
                            <p>{featVisible.veggie_description}</p>
                            {/* <p className={classes?'featVeggieText': ''}>Recipes</p> */}
                        </div>
                    
                    </ul>
                )}
                {/* CLICK ON FRUIT */}
                {(isFruits)&&(featVisible)&&(
                    <ul className={classes?'featVisibleFruit':''}>
                        <img className={classes?'featFruitImg':''} src={featVisible.fruit_url} alt={featVisible.fruit_name}/>
                        <div className={classes?'featFruitText': ''}>
                            <h3 className={classes?'featFruitTitle': ''}>{featVisible.fruit_name}</h3>
                            <p>{featVisible.fruit_description}</p>
                        </div>
                    </ul>
                )}
                {/* ALL MONTH VEGGIES / ALL MONTH FRUITS */}
                {(isFruits)
                    ? <FruitsGrid 
                            countryVeggies = {props.countryVeggies}
                            monthFruits = {props.monthFruits}
                            handleFruitDetailsCb={fruit => handleFruitDetails(fruit)}
                            featVisible = {props.featVisible}
                            setfeatVisible={props.setfeatVisible}
                            />
                    : <VeggiesGrid 
                            countryVeggies = {props.countryVeggies}
                            monthVeggies = {props.monthVeggies}
                            // requestMonthCb={text => props.requestMonthCb(text)}
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
