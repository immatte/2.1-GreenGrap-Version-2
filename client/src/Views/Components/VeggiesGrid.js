import React, { useEffect } from 'react';
import './VeggiesGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

/* CHILD OF USERVIEW */

function VeggiesGrid(props) {

    const EMPTY_FORM = {
        country_fk: '',
        id: 0,
        month_fk: '',
        veggie_name: '',
        veggie_type: '',
        veggie_url: '',
        veggie_fk: '',
    };


    //MAKE VISIBLE VEGGIE DETAILS WHEN CLICKING ON A VEGGIE IMAGE FROM THE GRID
    const handleChangeView = (event) => {
        props.handleVeggieDetailsCb(event)
    };

    // console.log(featVisible)
    // console.log(featVisible.veggie_url)

    return (
    <div>
        <div className='monthVeggies'>

            <ul id="VeggiesGrid">
            {
            props.monthVeggies.map((veggie) => (
                <li id='veggiesbox'>
                    <img className='veggieImage'
                        onClick={handleChangeView}
                        // onClick={handleChangeView}
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
