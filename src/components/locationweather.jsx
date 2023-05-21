import React from 'react';
// import handleGetlocation from './geolocation';
import axios from 'axios';
const WeatherComponent = () => {

    const [city, setCity] = React.useState(null);
    const [weatherdata, setWeatherData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const API_KEY = 'c7626b5787746c629c3310a10f75e07b';

    const fetchWeatherData = async(city) => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            setWeatherData(response.data);
            console.log(response.data);
            setError(null);
        }
        catch (error)
        {
            setWeatherData(null);
            setError('Failed to fetch the weather data.');
        }
    };
    const handleCitySearch = () => {
        if(city.trim()!=='')
        {
            fetchWeatherData(city);
        }
    };
    const handleLocationClick = () => {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    fetchWeatherDataByCoordinates(latitude,longitude);
                },
                (error) => {
                    setError('Failed to retrieve location.');
                }
            );
        }
        else
        {
            setError('Geolocation is not supported by this browser.');
        }
    };
    const fetchWeatherDataByCoordinates = async(latitude,longitude) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
            setWeatherData(response.data);
            console.log(response.data);
            setError(null);
        }
        catch (error)
        {
            setWeatherData(null);
            setError('Failed to fetch weather data.');
        }
    };
    function formatTemperature(kelvin)
    {
        return `${(kelvin-273.15).toFixed(1)}℃`;
    }
    return (
        <div className='weather'>
            <h2>Weather Component 2.0</h2>
            <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter city name'>
            </input>
            <button onClick={handleCitySearch}>Search</button>
            <button onClick={handleLocationClick}>Get Current Location's Weather</button>
            {error && <p>{error}</p>}
            {weatherdata && (
                <div>
                    <h3>{weatherdata.name}</h3>
                    <p>Temperature:{formatTemperature(weatherdata.main.temp)}</p>
                    <p>Weather: {weatherdata.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};
export default WeatherComponent;