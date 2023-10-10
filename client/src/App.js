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
  const [ monthVeggies, setMonthVeggies ] = useState([]);
  // const [ monthVeggiesId, setMonthVeggiesId ] = useState([]);
  const [ monthfruits, setMonthfruits ] = useState([]);
  const [ selectedCountry, setSelectedCountry ] = useState();
  const [ countryname, setCountryname ] = useState([]);
  const { monthVeggiesId } = useParams();

  const navigate = useNavigate();
  const countriesAcronyms = ["cl", "es"]

  // console.log(monthVeggies[0].month_fk)
  console.log(selectedCountry)

  useEffect (() => {
    getAllVeggies()
  }, [selectedCountry]);

  const getAllVeggies = async () => {
    //Get the veggies linked to a Country
    try {
      let response = await fetch(`/veggies/${selectedCountry}`);
      if (response.ok) {
        let data = await response.json();
        setCountryVeggies(data);
        console.log(data)
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
    
  };

  console.log('countryVeggies =', countryVeggies)
  // console.log('countryVeggiesMonth =', countryVeggies[0].month_fk)
  let veg = countryVeggies.filter(v => (v.month_fk === "2"));
  console.log('veg', veg)
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
    // console.log(month)
    let veggies = countryVeggies.filter(v => v.month_fk === `${month}`);
    console.log('veggies', veggies)
    setMonthVeggies(veggies);
    
  };
  
  console.log(monthVeggies)

  const requestMonth2 = async (month) => {
    //NewRequest --> date(Month)
    //Get the FRUITS linked to Month and Country
    try {
      let response = await fetch(`/fruits/${selectedCountry}/${month}`);
      if (response.ok) {
        let data = await response.json();
        setMonthfruits(data);
        console.log(data)
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
    
  };

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
                countriesAcronyms = {countriesAcronyms}
                requestMonthCb={text => requestMonth(text)}
                requestMonth2Cb={text => requestMonth2(text)}
                setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
                setCountryname = {setCountryname}  countryname = {countryname}
                monthVeggies = {monthVeggies}
                monthFruits={monthfruits}/>}
                > 
                
          </Route>
          <Route path="/:countryname/" element={
            <UserView 
              setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
              countriesAcronyms = {countriesAcronyms}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}
              >
          </Route>
          <Route path="/:countryname/:monthfruits/fruits" element={
            <CalendarGrid 
              setCountryVeggies = {setCountryVeggies} countryVeggies = {countryVeggies}
              countriesAcronyms = {countriesAcronyms}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}
              >
          </Route>
          <Route path="/:countryname/:monthveggies/veggies" element={
            <UserView 
            requestMonthCb={text => requestMonth(text)}
            requestMonth2Cb={text => requestMonth2(text)}
            setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
            setCountryname = {setCountryname}  countryname = {countryname}
            monthVeggies = {monthVeggies}
            monthVeggiesId = {monthVeggiesId}
            monthFruits={monthfruits}/>}>
            
          </Route>
          <Route path="/:countryname/:monthfruits/fruits/:fruitName" element={
            <CalendarGrid 
              countriesAcronyms = {countriesAcronyms}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}>
          </Route>
          <Route path="/:countryname/:monthveggies/veggies/:veggieName" element={
            <CalendarGrid 
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              setCountryname = {setCountryname}  countryname = {countryname}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}>
          </Route>
          
          <Route path="/:monthveggies/recipes" element={<RecipesView/> }>
          </Route>
            
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
