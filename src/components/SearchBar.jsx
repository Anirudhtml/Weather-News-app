import React from "react";
import './SearchBar.css'

function SearchBar(props) {

  function handleChange(event) {
    props.setUserInput(event.target.value);
  }

  return (
    <div className="search-container">
      <input onChange={handleChange} value={props.userInput} placeholder="Enter a city name"></input>
    </div>
  );
}

export default SearchBar;
