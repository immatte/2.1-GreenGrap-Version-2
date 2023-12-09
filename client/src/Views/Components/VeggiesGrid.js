import React, { useEffect } from 'react';
import './VeggiesGrid.css';
import { useParams } from "react-router-dom";

/* CHILD OF USERVIEW */

function VeggiesGrid(props) {
    const params = useParams();

    //MAKE VISIBLE VEGGIE DETAILS WHEN CLICKING ON A VEGGIE IMAGE FROM THE GRID
    const handleChangeView = (event) => {
        props.handleVeggieDetailsCb(event)
    };
    // console.log(props.monthVeggies)
    // let monthVeggies = countryVeggies.find()
    // let veggiesGrid = props.monthVeggies
    console.log("props.countryVeggies", props.countryVeggies)
    console.log("params.monthId", params.monthId)

    let veggiesGrid2 = props.countryVeggies.filter(v => v.month_fk === `${params.monthId}`)
    console.log("veggiesGrid2", veggiesGrid2)

    return (
    <div>
        <div className='monthVeggies'>

            <ul id="VeggiesGrid">
            {
            veggiesGrid2.map((veggie) => (
                <li id='veggiesbox'>
                    <img className='veggieImage'
                        onClick={handleChangeView}
                        src= {veggie.veggie_url}
                        alt= {veggie.veggie_name}
                        />
                    <h5 id='veggieText'> {veggie.veggie_name} </h5>
                </li>
            )) 
            }
            </ul>
        </div>
    </div>
    );
}

export default VeggiesGrid;
