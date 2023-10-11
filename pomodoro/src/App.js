import React, { useRef, useState } from "react";
import "./App.css";
import { MdReplayCircleFilled } from "react-icons/md";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [background, setBackGround] = useState("#f84935");
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current != null) return;

    setTitle("You're doing great!");
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep it up!");
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);

    intervalRef.current = null;
    setTitle("Ready to go another round?");
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  function setPomodoroTimer() {
    setTitle("Let the countdown begin!!!");
    setTimeLeft(25 * 60);
    setBackGround("#f84935");
    stopTimer();
  }

  function setShortTimer() {
    setTitle("Time for a break!");
    setTimeLeft(5 * 60);
    setBackGround("#4A678A");
    stopTimer();
  }

  function setLongTimer() {
    setTitle("Time for a break!");
    setTimeLeft(15 * 60);
    setBackGround("#768A4A");
    stopTimer();
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="app" style={{ background: background }}>
      <div className="buttons">
        <button onClick={setPomodoroTimer}>Pomodoro</button>
        <button onClick={setShortTimer}>Short Break</button>
        <button onClick={setLongTimer}>Long Break</button>
      </div>

      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="icon_group">
        {!isRunning && (
          <AiFillPlayCircle className="icon" onClick={startTimer} />
        )}
        {isRunning && (
          <AiFillPauseCircle className="icon" onClick={stopTimer} />
        )}
        <MdReplayCircleFilled className="icon" onClick={resetTimer} />
      </div>
    </div>
  );
}

export default App;
