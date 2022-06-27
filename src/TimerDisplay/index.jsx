import { formatTime } from "../formatTime";
import React from 'react';
import "./TimerDisplay.css";

export default function TimerDisplay(props) {
  return (
    <div className=".timer__display">
      <p id="timer">{formatTime(props.time)}</p>
    </div>
  )
}
