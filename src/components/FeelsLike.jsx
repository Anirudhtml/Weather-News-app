import React from "react";
import Items from "./FeelsLikeItems";
import "./FeelsLike.css";

function FeelsLike(props) {
  return (
    <div className="third-container">
        {props.weatherReport.load ? 
        <>
        <div className="feels-like"> 
            <p>Feels Like</p>
            <h1>{(props.weatherReport.feels_like - 273.15).toFixed(1)}°C</h1>
        </div>
        <div>
            <Items name= 'Visibility' value={props.weatherReport.visibility}  />
            <Items name= 'Pressure' value={props.weatherReport.pressure}  sign=' mb' />
            <Items name= 'Humidity' value={props.weatherReport.humidity}   sign='%' />
        </div> 
        </> : 
        <h1>Feels like: Bored</h1>}
        
    </div>
  );
}

export default FeelsLike;
