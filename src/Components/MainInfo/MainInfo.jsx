import "./MainInfo.css";
import { useContext } from "react";
import { WeatherContext } from "../Form/Form";

const MainInfo = () => {
  const data = useContext(WeatherContext);
  let options = { hour: "numeric", dayPeriod: "short" };
//   options.timeZone = 'UTC';
// options.timeZoneName = 'short';

  const currentDate = new Date()
  let formattedDate = (new Intl.DateTimeFormat('en-US').format(currentDate));
  let formattedTime = (new Intl.DateTimeFormat('en-US', options).format(currentDate))
  console.log(formattedDate, formattedTime)
  return (
    <div>
      {typeof data.main != "undefined" ? (
        <div className="flex-details">
          <article className="details">
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="icon of current weather"
              className="weather-icon"
            />
            <h3 className="city">
              {data.name}, {data.sys.country}
            </h3>
              <p className="temp">
                {Math.trunc(data.main.temp - 273)} °C
              </p>
            <p className="speed">Time:  </p>
            <p className="day">{formattedDate}</p>
            
          </article>
          <article className="details">
          <p className="speed">Wind speed: {data.wind.speed} km</p>
            <p className="speed">Longitude: {Math.trunc(data.coord.lon) } °</p>
            <p className="day">Latitude: {Math.trunc(data.coord.lat) } °</p>
            <p className="weather-condition">{data.weather[0].main}</p>
            <p className="weather-condition">{data.weather[0].description}</p>
          </article>
          <article className="details">
            
            <p className="day">Tuesday: {data.sys.country}</p>
            <p className="weather-condition">{data.weather[0].description}</p>
          </article>
        </div>
      ) : ("")}
    </div>
  );
};

export default MainInfo;
