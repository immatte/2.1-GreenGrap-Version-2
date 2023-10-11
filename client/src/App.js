import React, {useState, useEffect} from "react";
import UserView from "./Views/UserView";
import './App.css';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import NotFound from './Views/NotFound';
import RecipesView from './Views/RecipesView'
import CalendarGrid from "./Views/Components/CalendarGrid";
import VeggiesGrid from "./Views/Components/VeggiesGrid";

/* PARENT FROM USERVIEW AND NOTFOUND
Check calendarGrid comments for lines 11-28(lines changed I guess)
*/

function App() {

  const [ countryVeggies, setCountryVeggies ] = useState([]);
  const [ countryFruits, setCountryFruits ] = useState([]);
  const [ monthVeggies, setMonthVeggies ] = useState([]);
  // const [ monthId, setMonthId ] = useState();
  const [ monthfruits, setMonthfruits ] = useState([]);
  const [ selectedCountry, setSelectedCountry ] = useState();
  const [ countryname, setCountryname ] = useState([]);
  const { monthId, country } = useParams();

  const navigate = useNavigate();
  const countriesAcronyms = ["cl", "es"]

  // console.log(monthVeggies[0].month_fk)
  console.log(country)
  console.log(monthId)


  useEffect (() => {
    getAllVeggies()
    getAllFruits()
  }, [selectedCountry]);

  const getAllVeggies = async () => {
    //Get the veggies linked to a Country
    try {
      let response = await fetch(`/veggies/${selectedCountry}`);
      if (response.ok) {
        let veggiesData = await response.json();
        setCountryVeggies(veggiesData);
        console.log(veggiesData)
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
    
  };

  const getAllFruits = async () => {
    //Get the fruits linked to a Country
    try {
      let response = await fetch(`/fruits/${selectedCountry}`);
      if (response.ok) {
        let fruitsData = await response.json();
        setCountryFruits(fruitsData);
        console.log(fruitsData)
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
    
  };

  // console.log('countryVeggies =', countryVeggies)
  // console.log('countryVeggiesMonth =', countryVeggies[0].month_fk)
  // let veg = countryVeggies.filter(v => (v.month_fk === "2"));
  // console.log('veg', veg)
  // requestMonth uses a specific route created for creating a new table
  const requestMonth = async (month) => {
    //NewRequest --> date(Month)
    //Get the veggies linked to Month and Country
    // try {
    //   let response = await fetch(`/veggies/${selectedCountry}/${month}`);
    //   if (response.ok) {
    //     let data = await response.json();
    //     setMonthVeggies(data);
    //     console.log(data)
    //   } else {
    //     console.log(`Server error: ${response.status}: ${response.statusText}`);
    //   }
    // } catch (err) {
    //   console.log(`Server error: ${err.message}`);
    // }
    
    // setMonthId(month)
    let veggies = countryVeggies.filter(v => v.month_fk === `${month}`);
    console.log('veggies', veggies)
    setMonthVeggies(veggies);
    
  };
  
  // console.log(monthVeggies)

  const requestMonth2 = async (month) => {
    //NewRequest --> date(Month)
    //Get the FRUITS linked to Month and Country
    // try {
    //   let response = await fetch(`/fruits/${selectedCountry}/${month}`);
    //   if (response.ok) {
    //     let data = await response.json();
    //     setMonthfruits(data);
    //     console.log(data)
    //   } else {
    //     console.log(`Server error: ${response.status}: ${response.statusText}`);
    //   }
    // } catch (err) {
    //   console.log(`Server error: ${err.message}`);
    // }
    console.log(month)
    let fruits = countryFruits.filter(v => v.month_fk === `${month}`);
    console.log('fruits', fruits)
    setMonthfruits(fruits);    
  };

  console.log('fruits', monthfruits)

  return (
  <div className="row justify-content-center">
    <div className="col-7">

      <div className="row d-flex justify-content-center">
        <div className="col-xl-5 col-lg-5 col-md-5 col-10">
          <h1 className="display-6" id="AppTitle">GreenGrab</h1>
        </div>    
      </div>
        
        {/* </div> */}
        

      <div>
        
        <Routes>
          <Route path="/" element={ 
              <UserView 
                setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
                setCountryFruits = {setCountryFruits} countryFruits = {countryFruits}
                countriesAcronyms = {countriesAcronyms}
                requestMonthCb={text => requestMonth(text)}
                requestMonth2Cb={text => requestMonth2(text)}
                setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
                setCountryname = {setCountryname}  countryname = {countryname}
                country = {country}
                monthVeggies = {monthVeggies}
                monthFruits={monthfruits}/>}
                > 
                
          </Route>
          <Route path="/:selectedCountry/" element={
            <CalendarGrid 
              setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
              setCountryFruits = {setCountryFruits} countryFruits = {countryFruits}
              countriesAcronyms = {countriesAcronyms}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              country = {selectedCountry}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}
              >
          </Route>
          {/* <Route path="/:selectedCountry/:monthId/fruits" element={
            <CalendarGrid 
              setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
              setCountryFruits = {setCountryFruits} countryFruits = {countryFruits}
              countriesAcronyms = {countriesAcronyms}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              monthId = {monthId}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}
              >
          </Route>
          <Route path="/:selectedCountry/:monthId/veggies" element={
            <CalendarGrid 
            setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
            setCountryFruits = {setCountryFruits} countryFruits = {countryFruits}
            requestMonthCb={text => requestMonth(text)}
            requestMonth2Cb={text => requestMonth2(text)}
            setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
            setCountryname = {setCountryname}  countryname = {countryname}
            monthId = {monthId}
            monthVeggies = {monthVeggies}
            monthFruits={monthfruits}/>}>
            
          </Route>
          <Route path="/:selectedCountry/:monthId/fruits/:fruitName" element={
            <CalendarGrid 
              setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
              setCountryFruits = {setCountryFruits} countryFruits = {countryFruits}
              countriesAcronyms = {countriesAcronyms}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              monthId = {monthId}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}>
          </Route>
          <Route path="/:selectedCountry/:monthId/veggies/:veggieName" element={
            <CalendarGrid 
              setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
              setCountryFruits = {setCountryFruits} countryFruits = {countryFruits}
              countriesAcronyms = {countriesAcronyms}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              monthId = {monthId}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}>
          </Route>
          
          <Route path="/:monthId/recipes" element={<RecipesView/> }>
          </Route> */}
            
        {/* STARTED TO CHANGE ROUTES WHEN CHANGING COUNTRY, MONTH, VEGGIES OR FRUITS */}
            {/* <Route path=":month" element={
                <CalendarGrid 
                  requestMonthCb={text => requestMonth(text)}
                  setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
                  requestMonth2Cb={text => requestMonth2(text)}
                  monthVeggies = {monthVeggies}
                  monthFruits={monthfruits}/>}>
            </Route> */}
{/* 
            <Route path=":month/veggies" element={
                      <VeggiesGrid monthVeggies = {monthVeggies}/>
                    }>
            </Route> */}

          <Route path="*" element={ <NotFound />} />
        </Routes>
          
      </div>
    
    </div>
  </div>
  );
}

export default App;
