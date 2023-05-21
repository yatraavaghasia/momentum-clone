import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [mode, setMode] = useState('work');
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(0); // User-input custom minutes
  const [inputValue, setInputValue] = useState('');
  const[showError,setShowError]=useState(false);
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
    if (mode === 'work') {
      // Work timer completed, switch to short break
      setMode('shortBreak');
      setMinutes(5);
      setSeconds(0);
    } else if (mode === 'shortBreak') {
      // Short break completed, switch to work
      setMode('work');
      setMinutes(25);
      setSeconds(0);
    } else if (mode === 'longBreak') {
      // Long break completed, switch to work
      setMode('work');
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
    setMode('work');
    setMinutes(25);
    setSeconds(0);
  };

  const setShortBreak = () => {
    setIsActive(false);
    setMode('shortBreak');
    setMinutes(5);
    setSeconds(0);
  };

  const setLongBreak = () => {
    setIsActive(false);
    setMode('longBreak');
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
    setMode('custom');
    setMinutes(value);
    setSeconds(0);
    setShowError(false);
    }else{
      setShowError(true);
      console.log('limit exceeded');
    }
  };

  return (
    <div>
      <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
      <div>
        {!isActive ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer}>Pause</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <p>Mode: {mode}</p>
      </div>
      <div>
        <button onClick={setShortBreak}>Short Break</button>
        <button onClick={setLongBreak}>Long Break</button>
      </div>
      <div>
       
      <input
          type="number"
          min="0"
          max="60"
          value={inputValue}
          onChange={handleCustomMinutesChange}
        />
        <button onClick={setCustomTimer}>Set Custom Timer</button>
        {showError && <p>Error: Enter a value betweeb 0 and 60</p>}
      </div>
    </div>
  );
};

export default PomodoroTimer;
