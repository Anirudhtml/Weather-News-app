import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherToday from "./components/weather-today";
import News from "./components/News";
import FeelsLike from "./components/FeelsLike";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: null, long: null });
  const [weatherReport, setWeatherReport] = useState({
    icon: null,
    location: null,
    weather: null,
    temp_atm: null,
    feels_like: null,
    humidity: null,
    pressure: null,
    visibilty: null,
    load: false,
  });
  const [news, setNews] = useState({
    title: null,
    description: null,
    link: null,
    load: false,
  });

  async function getData(userInput) {
    const dataApiKey = process.env.REACT_APP_DATA_API_KEY;
    const url = `https://geocode.maps.co/search?q=${userInput}&api_key=${dataApiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const lat = data[0].lat;
      const long = data[0].lon;

      if (data && data.length > 0) {
        setCoordinates({ lat, long });
        setApiData(data);

        getWeatherData(lat, long);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getWeatherData(lat, long) {
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherApiKey}`;

    try {
      const response = await fetch(weather_url);
      const data = await response.json();

      if (data) {
        setWeatherReport({
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          location: data.name,
          weather: data.weather[0].main,
          temp_atm: data.main.temp,
          min_temp: data.main.temp_min,
          max_temp: data.main.temp_max,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          visibility: data.visibility,
          load: true,
        });
        getNews(data.name);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getNews(location) {
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
    const news_url = `https://newsapi.org/v2/everything?q=${location}&from=2024-05-11&sortBy=publishedAt&apiKey=${newsApiKey}`;

    try {
      const response = await fetch(news_url);
      const data = await response.json();

      const newsNewData = {
        title: data.articles[0].title,
        description: data.articles[0].description,
        link: data.articles[0].url,
        load: true,
      };

      setNews(newsNewData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (userInput) {
        getData(userInput);
        setUserInput("");
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [userInput]);

  return (
    <>
      <div className="main-container">
        <div className="header-content">
          <SearchBar userInput={userInput} setUserInput={setUserInput} />
        </div>

        <div className="display-content">
          <WeatherToday weatherReport={weatherReport} />
          <News news={news} />
        </div>
        <FeelsLike weatherReport={weatherReport} />
      </div>
      <Footer />
    </>
  );
}

export default App;
