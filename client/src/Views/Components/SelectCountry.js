import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectCountry.css';

/* CHILD FROM HEADER */

function SelectCountry(props) {

const navigate = useNavigate();

const handleSelectChange = ( event ) => {
    let  value  = event.target.value;
    props.setSelectedCountry(value);
    navigate(`/${value}`);
    console.log(value, "handleSelectChange")
}
    return (
    <div>
            
        <select className = "form-select form-select-lg" id="selected"
                onChange = { handleSelectChange }>
            <option selected id="editOptions"> Select a country </option> 
            {props.countries.map(country => (
                <option id="editOptions" key={country.id} value={country.id}>{country.country_name}</option>
            )) }
        </select>

    </div>
    );
}

export default SelectCountry;
