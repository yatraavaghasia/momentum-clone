import React from 'react';
import WeatherComponent from './weather';
const WeatherParent = () => {
    const [weatherCount, SetWeatherCount] = React.useState(0);
    const handleAddWeather = () => {
        if(weatherCount<10)
        {
            SetWeatherCount(weatherCount+1);
        }
    }
    return (
        <div className='weather-parent'>
        {Array.from( {length:weatherCount}).map((_, index)=> (
            <WeatherComponent key={index} />
        ))}
        <button onClick={handleAddWeather} className='weatherbtn'><i class="fa-solid fa-cloud"></i></button>
        </div>
    );
};
export default WeatherParent;