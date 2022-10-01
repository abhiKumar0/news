import React, { useState } from 'react';
import { Close } from '@mui/icons-material'

import "./CountryModal.scss";



const countries = [
  { name: "Argentina", code: "ar"},
  { name: "Australia", code: "au"},
  { name: "Belgium", code: "bg"},
  { name: "Canada", code: "ca"},
  { name: "China", code: "ch"},
  { name: "England", code: "eg"},
  { name: "France", code: "fr"},
  { name: "Hong Kong", code: "hk"},
  { name: "India", code: "in"},
  { name: "Italy", code: "it"},
  { name: "Mexico", code: "mx"},
  { name: "Philippines", code: "ph"},
  { name: "Russia", code: "ru"},
  { name: "Thailand", code: "th"},
  { name: "United State", code: "us"},
  { name: "Russia", code: "ru"},
]

const CountryModal = ({ isOpen, setIsOpen, setCountry, country }) => {

  const handleClick = (code) => {
    setCountry(code);
    setIsOpen(false);
  }


  return (
    <div>
      <div className={`news__country ${!isOpen ? "hide" : ""} `}>
        <div className="news__country-container">
        <button onClick={() => setIsOpen(false)} className="close-btn">
          <Close />
        </button>
        <h1>Select Country</h1>
        <ul>
          {countries.map((item, i) => (
            <li style={country === item.code ? { color: '#001493'} : {}} key={i} onClick={() => handleClick(item.code)} >{item.name}</li>
          ))}
        </ul>
        
        </div>
      </div>
    </div>
  );
}

export default CountryModal;