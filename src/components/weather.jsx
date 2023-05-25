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
            console.log(response.data.weather[0].icon);
            let icon = response.data.weather[0].icon
            let iconurl = `https://openweathermap.org/img/wn/${icon}.png`
            console.log(iconurl);
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
        return `${(kelvin-273.15).toFixed(1)}`;
    }
    return (
        <div className='weather-child'>
            { weatherdata ? (
                <div className='children1'>
                { weatherdata.weather[0].icon && <img src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}.png`} alt='Weather Icon'/>}
                    <h3>{formatTemperature(weatherdata.main.temp)}°C</h3>
                    <p id='city-name'>{weatherdata.name}</p>
                    {/* <p>Weather: {weatherdata.weather[0].description}</p> */}
                </div>
            ):(
                <div className='children2'>
                <div>
                <input
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Enter city name'>
                </input>
                <button onClick={handleCitySearch}><i class="fa-solid fa-magnifying-glass-location"></i></button>
                <button onClick={handleLocationClick}><i class="fa-solid fa-location-dot"></i></button>
                {error && <p>{error}</p>}
                </div>
                </div>
            )}
        </div>
    );
};
export default WeatherComponent;