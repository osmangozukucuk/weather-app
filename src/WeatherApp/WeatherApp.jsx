import React, { useState } from "react";
import './WeatherApp.css'

import search_icon from "../Components/Assets/search.png"
import clear_icon from "../Components/Assets/clear.png"
import cloud_icon from "../Components/Assets/cloud.png"
import drizzle_icon from "../Components/Assets/drizzle.png"
import rain_icon from "../Components/Assets/rain.png"
import snow_icon from "../Components/Assets/snow.png"
import wind_icon from "../Components/Assets/wind.png"
import humidity_icon from "../Components/Assets/humidity.png"

const WeatherApp = () => {

    let API_key ="cd6bc803e86f635c2ddb86896656712d";

    const [wicon,setWicon] = useState(cloud_icon);

    const search = async () => {
        const element =document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
          return 0;
        }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_key}`;

      let response = await fetch(url);
      let data = await response.json();
      const humidity =document.getElementsByClassName("humidity-percent")
      const wind =document.getElementsByClassName("wind-rate")
      const temprature =document.getElementsByClassName("weather-temp")
      const location =document.getElementsByClassName("weather-location")
   
   
        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°c";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
          setWicon(clear_icon);       
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
          setWicon(cloud_icon);
        } 
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
          setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
          setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
          setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
          setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
          setWicon(snow_icon);
        }
        else
        {
          setWicon(clear_icon);       
        }
      }

  return (
    <div className="container"> 
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search"/>
        <div className="search-icon" onClick={() => {search()}}>
          <img src={search_icon}/>
          </div>
        </div>
        <div className="weather-image">
          <img src={wicon} alt="" />
        </div>
        <div className="weather-temp"></div>
        <div className="weather-location"></div>
        <div className="data-container">
          <div className="element">
            <img src="" alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent"></div>
              <div className="text">Nem oranı</div>
            </div>
          </div>
          <div className="element">
            <img src="wind_icon" alt="" className="icon" />
            <div className="data">
              <div className="wind-rate"></div>
              <div className="text">Rüzgar hızı</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WeatherApp;