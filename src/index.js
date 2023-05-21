import React from 'react';
import ReactDOM from 'react-dom/client';
import PostComponent from './components/FetchData';
import BackgroundComponent from './components/backgroundComponent';
import ReadTime from './components/time';
// import GeolocationComponent from './components/geolocation';
import SearchBar from './components/searchbar';
import WeatherComponent from './components/locationweather';
import ToDo from './components/todo';
import Quotes from './components/quotes';
import PomodoroTimer from './components/PomodoroTimer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='main'>
<BackgroundComponent />
<ReadTime />
<WeatherComponent />
<SearchBar />
<ToDo />
// <PostComponent />
<PomodoroTimer />
<Quotes />
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

