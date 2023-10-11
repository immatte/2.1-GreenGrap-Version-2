import React, { useEffect } from 'react';
import './VeggiesGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

/* CHILD OF USERVIEW */

function VeggiesGrid(props) {

    //MAKE VISIBLE VEGGIE DETAILS WHEN CLICKING ON A VEGGIE IMAGE FROM THE GRID
    const handleChangeView = (event) => {
        props.handleVeggieDetailsCb(event)
    };
    // console.log(props.monthVeggies)

    let veggiesGrid = props.monthVeggies

    return (
    <div>
        <div className='monthVeggies'>

            <ul id="VeggiesGrid">
            {
            veggiesGrid.map((veggie) => (
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
