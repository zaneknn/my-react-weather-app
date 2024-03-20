import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="forecast">
        <h1>Riga, LV</h1>
        <ul>
          <li>Wednesday,18:00</li>
          <li>Mostly Cloudy</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="tempUnit">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
            <span className="temperature ms-2">6</span>
            <span className="unit">°C | °F </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitatio: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
