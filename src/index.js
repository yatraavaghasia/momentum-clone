import React from 'react';
import ReactDOM from 'react-dom/client';
// import PostComponent from './components/FetchData';
import BackgroundComponent from './components/backgroundComponent';
import ReadTime from './components/time';
// import GeolocationComponent from './components/geolocation';
// import SearchBar from './components/searchbar';
// import WeatherComponent from './components/locationweather';
import WeatherParent from './components/weatherparent';
import ToDo from './components/todo';
import Quotes from './components/quotes';
import PomodoroTimer from './components/PomodoroTimer';
// import NameTimeSearch from './components/nametimesearch';
import App from './components/middle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='main'>
<div className='top'>
<WeatherParent />
</div>
<div className='middle'>
<App />
{/* <PomodoroTimer /> */}
</div>
<div className='bottom'>
<BackgroundComponent />
<Quotes />
<ToDo />
</div>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

