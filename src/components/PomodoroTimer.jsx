import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [mode, setMode] = useState('Focus');
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(0); // User-input custom minutes
  const [inputValue, setInputValue] = useState('');
  const[showError,setShowError]=useState(false);
  const [menu,setMenu] = useState(false);
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes === 0) {
          clearInterval(interval);
          handleTimerCompletion(); // Handle timer completion based on the current mode
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const handleTimerCompletion = () => {
    if (mode === 'Focus') {
      // Work timer completed, switch to short break
      setMode('Short Break');
      setMinutes(5);
      setSeconds(0);
    } else if (mode === 'Short Break') {
      // Short break completed, switch to work
      setMode('Focus');
      setMinutes(25);
      setSeconds(0);
    } else if (mode === 'Long Break') {
      // Long break completed, switch to work
      setMode('Focus');
      setMinutes(25);
      setSeconds(0);
    }
    // You can add your own logic for handling long breaks if needed
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMode('Focus');
    setMinutes(25);
    setSeconds(0);
  };

  const setShortBreak = () => {
    setIsActive(false);
    setMode('Short Break');
    setMinutes(5);
    setSeconds(0);
  };

  const setLongBreak = () => {
    setIsActive(false);
    setMode('Long Break');
    setMinutes(15);
    setSeconds(0);
  };

  const handleCustomMinutesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(e.target.value);
    if(value<0 && value>60){
      setShowError(true);
    }else{
      setShowError(false);
    }
    //setCustomMinutes(value >= 0 && value <= 60 ? value : customMinutes);
  };

  const setCustomTimer = () => {
    const value=parseInt(inputValue,10);
    if(value>=0 && value<=60){
    setIsActive(false);
    setMode('Custom');
    setMinutes(value);
    setSeconds(0);
    setShowError(false);
    }else{
      setShowError(true);
      console.log('limit exceeded');
    }
  };
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const menuStyle = {
    display: menu ? 'block' : 'none',
  };
  return (
    <div className='pomodoro'>
      <div className='big'>
        <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
      </div>
      <div>
        <h3>{mode}</h3>
      </div>
      <div className='control1'>
        {!isActive ? (
          <button onClick={startTimer}><i class="fa-solid fa-circle-play"></i></button>
        ) : (
          <button onClick={pauseTimer}><i class="fa-solid fa-pause"></i></button>
        )}
        <button onClick={resetTimer}><i class="fa-solid fa-rotate-left"></i></button>
      </div>
      <div className='child1'>
      <button onClick={toggleMenu}><i class="fa-solid fa-ellipsis"></i></button>
      <div style={menuStyle} className='menu'>
        <div className='break'>
          <button onClick={setShortBreak}><i class="fa-solid fa-mug-hot"></i></button>
          <button onClick={setLongBreak}><i class="fa-solid fa-burger"></i></button>
        </div>
        <div className='star'>
          <i class="fa-solid fa-star"></i>
        </div>
        <div className='customtimer'>
          <div>
              <input
                  type="number"
                  min="0"
                  max="60"
                  value={inputValue}
                  onChange={handleCustomMinutesChange}
                />
                <button onClick={setCustomTimer}><i class="fa-solid fa-stopwatch-20"></i></button>
          </div>
          <div>
              {showError && <p>You can only enter values between 0 and 60 minutes.</p>}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
