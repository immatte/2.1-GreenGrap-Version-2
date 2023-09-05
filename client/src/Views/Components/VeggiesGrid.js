import React from 'react';
import './VeggiesGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

/* CHILD OF USERVIEW */

function VeggiesGrid(props) {
    return (
    <div>
        <div className='monthVeggies'>
            <ul id="VeggiesGrid">
            {
            props.monthVeggies.map((veggie) => (
                <li id='veggiesbox'>
                    <img className='veggieImage'
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
