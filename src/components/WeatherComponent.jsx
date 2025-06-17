import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';

function WeatherComponent() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="container mt-4">
      <h2>🌤️ Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="form-control mb-2"
      />
      <button className="btn btn-primary" onClick={handleSearch}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      {data && (
      <div className="mt-3">
      <h4>{data.name}</h4>
       <p> Temp: {data.main.temp}°C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>        
      <p> Wind Speed: {data.wind.speed} m/s</p>     
      <p>☁️ Weather: {data.weather[0].description}</p>
      </div>
      )}
    </div>
  );
}

export default WeatherComponent;
