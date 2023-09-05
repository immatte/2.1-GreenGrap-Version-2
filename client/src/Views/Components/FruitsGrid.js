import React from 'react';
import './FruitsGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

/* CHILD OF CALENDAR GRID */

function FruitsGrid(props) {
    
    return (
    <div>
          
        <div className='monthFruits'>
            <ul id="FruitsGrid">
            {
             props.monthFruits.map((fruit) => (
                <li id='fruitbox'>
                  <img className='fruitImage'
                     src= {fruit.fruit_url}
                     alt= {fruit.fruit_name}
                  />
                            
                  <h5 id='fruitText'> {fruit.fruit_name}</h5>
                </li>
            )) 
            }

            </ul>
        </div>
    </div>
    );
}

export default FruitsGrid;
