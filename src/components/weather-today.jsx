import React from "react";

import "./weather-today.css";

function WeatherToday({ weatherReport }) {
  return (
    <div className="cardContainer">
      <div className="card">
        <p className="city">{weatherReport.location}</p>
        <p className="weather">{weatherReport.weather}</p>
        <svg
          className="weather"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
        >
          <image
            id="image0"
            width="100"
            height="100"
            x="0"
            y="0"
            xlinkHref={weatherReport.icon}
          ></image>
        </svg>
        { weatherReport.load ? <>
        
        <p className="temp">{(weatherReport.temp_atm - 273.15).toFixed(1)}°C</p>
        <div clasName="minmaxContainer">
          <div className="min">
            <p className="minHeading">Min</p>
            <p className="minTemp">{(weatherReport.min_temp - 273.15).toFixed(1)}°C</p>
          </div>
          <div className="max">
            <p className="maxHeading">Max</p>
            <p className="maxTemp">{(weatherReport.max_temp - 273.15).toFixed(1)}°C</p>
          </div>
        </div>
        </>
        :
        <p>
          ...
        </p>

}
      </div>
    </div>
  );
}

export default WeatherToday;
