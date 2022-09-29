import "./Form.css";
import MainInfo from "../MainInfo/MainInfo";
import { useState, createContext} from "react";


export const WeatherContext = createContext()
const Form = () => {
  
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState("");
  const apiKey = `ab9f1a7320b8bc7c69bc10187a26adf7`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`;
  const inputHandler = e => setSearchCity(e.target.value);

    let fetchWeather = e => {
      if (e.key === "Enter") {
        e.preventDefault()
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`
        ).then(response => response.json())
        .then((data) => {
          console.log(data)
          setCity(data);
        setSearchCity('')
      })
        }
        
        
    };
  
  return (
    <WeatherContext.Provider value={city}>
      <form action="" className="form-flex">
        <input
          type="search"
          placeholder="Search Here"
          className="search"
          value={searchCity}
          onChange={inputHandler}
          onKeyDown={fetchWeather}
        />
        {/* <div className="select-container">
          <span className="filters">Filters</span>
          <select name="" id="" className="select-element"></select>
          <select name="" id="" className="select-element"></select>
          <select name="" id="" className="select-element"></select>
        </div> */}
      </form>
      <MainInfo />
    </WeatherContext.Provider>
  );
};

export default Form;
