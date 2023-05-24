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
    <div>
      <button onClick={toggleComponent}>
        {showNameTimeSearch ? 'Switch to Pomodoro' : 'Switch to NameTimeSearch'}
      </button>
      <div>
      {
        showNameTimeSearch? <NameTimeSearch /> : <PomodoroTimer />
      }
      </div>
    </div>
  );
};

export default App;