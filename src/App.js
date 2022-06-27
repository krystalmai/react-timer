import React from "react";
import useTimer from "./useTimer";
import Header from "./Header"
import TimerDisplay from "./TimerDisplay";


function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <div className="App container">
      
      <div className="timer__wrapper">
        <TimerDisplay time={time} />
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>Stop </button>

          <button className="button" ref={active} onClick={startTimer}>Start</button>

          <button className="button" onClick={resetTimer}>Reset</button>
        </div>
        <Header />
      </div>
     
    </div>
  );
}

export default App;
