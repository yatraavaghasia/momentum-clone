import React, { useState } from 'react';
import NameTimeSearch from './nametimesearch';
import PomodoroTimer from './PomodoroTimer';

const App = () => {
  const [showNameTimeSearch, setShowNameTimeSearch] = useState(true);

  const toggleComponent = () => {
    setShowNameTimeSearch(!showNameTimeSearch);
  };

  const nameStyle = {
    display: showNameTimeSearch ? 'block' : 'none',
  };
  const pomodoroStyle = {
    display: showNameTimeSearch ? 'none' : 'block',
  };
  console.log(document.getElementsByClassName('nametimesearch'));
  const div1 = document.getElementsByClassName('nametimesearch');
  return (
    <div className='nametime'>
      <button onClick={toggleComponent} className='shuffle'>
        <i class="fa-solid fa-shuffle"></i>
      </button>
      <div style={nameStyle}>
      <NameTimeSearch />
      </div>
      <div style={pomodoroStyle}>
        <PomodoroTimer />
      </div>
    </div>
  );
};

export default App;