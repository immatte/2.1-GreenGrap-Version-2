import React, {useState, useEffect} from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import UserView from "./Views/UserView";
import './App.css';
import NotFound from './Views/NotFound';
import CalendarGrid from "./Views/Components/CalendarGrid";
import VeggiesGrid from "./Views/Components/VeggiesGrid";
import FruitsGrid from "./Views/Components/FruitsGrid";

/* PARENT FROM USERVIEW AND NOTFOUND
Check calendarGrid comments for lines 11-28(lines changed I guess)
*/

function App() {
  const [ countryVeggies, setCountryVeggies ] = useState([]);
  const [ countryFruits, setCountryFruits ] = useState([]);
  const [ monthVeggies, setMonthVeggies ] = useState([]);
  const [ monthfruits, setMonthfruits ] = useState([]);
  const [ selectedCountry, setSelectedCountry ] = useState();
  const { monthId, countryId } = useParams();
  const [countries, setCountries ] = useState([]);


  useEffect (() => {
    getCountries()
    console.log("loaded Countries")
  }, [selectedCountry]);

  useEffect (() => {
    getAllVeggies()
    console.log("loaded AllVeggies")
    getAllFruits()
    console.log("loaded AllFruits")
  }, [monthId, selectedCountry]);

  //get all countries
  async function getCountries() {
    try {
      let response = await fetch('/countries');
    //   let response = await fetch(`/${countries}`);

      if (response.ok) {
          let countries = await response.json();
          setCountries(countries);
          console.log("loaded Countries", countries)
      } else {
          console.log(`Server error: ${response.status} ${response.statusText}`);
      }
  } catch (err) {
      console.log(`Server error: ${err.message}`);
  }
  }

  const getAllVeggies = async () => {
    //Get the veggies linked to a Country
    try {
      let response = await fetch(`/veggies/${selectedCountry}`);
      if (response.ok) {
        let veggiesData = await response.json();
        setCountryVeggies(veggiesData);
        console.log("loaded AllVeggies",veggiesData)
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
        console.log("loaded AllFruits",fruitsData)
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
    let veggies = countryVeggies.filter(v => v.month_fk === `${month}`);
    console.log('veggies', veggies)
    setMonthVeggies(veggies);
    
  };
  
  // console.log(monthVeggies)

  const requestMonth2 = async (month) => {
    let fruits = countryFruits.filter(v => v.month_fk === `${month}`);
    console.log('fruits', fruits)
    setMonthfruits(fruits);    
  };

  console.log('fruits', monthfruits)
  console.log('countries', countries)
  console.log("selectedCountry", selectedCountry)
  console.log("countryVeggies", countryVeggies)

 

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
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
              countries={countries}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}/>}
              > 
          <Route path="/:countryId/" element={
            <CalendarGrid 
              countryVeggies = {countryVeggies}
              setCountryFruits = {setCountryFruits} countryFruits = {countryFruits}
              getAllVeggiesCb={text => getAllVeggies(text)}
              requestMonthCb={text => requestMonth(text)}
              requestMonth2Cb={text => requestMonth2(text)}
              // countryName={countryName}
              countries = {countries}
              setSelectedCountry ={setSelectedCountry} 
              countryId = {countryId}
              monthVeggies = {monthVeggies}
              monthFruits={monthfruits}
              />}
              />
              <Route path=":countryId/:monthId/veggies" element={<VeggiesGrid/>}/>
              <Route path=":countryId/:monthId/fruits" element={<FruitsGrid/>}/>
              <Route path=":countryId/:monthId/veggies/:veggieName" element={<VeggiesGrid/>}/>
              <Route path=":countryId/:monthId/fruits/:fruitName" element={<FruitsGrid/>}/>
                
          </Route>


          {/* </Route> */}
          
          {/* <Route path="/:monthId/recipes" element={<RecipesView/> }>
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
