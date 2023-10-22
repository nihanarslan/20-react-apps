import React, { useEffect, useState } from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import "./App.css";

const choices = [
  { id: 1, name: "rock", component: Rock, losesTo: 2 },
  { id: 2, name: "paper", component: Paper, losesTo: 3 },
  { id: 3, name: "scissors", component: Scissors, losesTo: 1 },
];
export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); //win, lose, draw

  useEffect(() => {
    reStartGame();
  }, []);

  function handleUserChoice(choice) {
    const chosenChoice = choices.find((x) => x.id === choice);
    setUserChoice(chosenChoice);

    //determine the winner
    if (chosenChoice.losesTo === computerChoice.id) {
      setLosses((losses) => losses + 1);
      setGameState("lose");
    } else if (chosenChoice.id === computerChoice.losesTo) {
      setWins((wins) => wins + 1);
      setGameState("win");
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState("draw");
    }
  }

  function renderComponent(choice) {
    const Component = choice.component; //Paper,Rock,Scissors
    return <Component />;
  }

  function reStartGame() {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins <= 1 ? "Win" : "Wins"}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{losses <= 1 ? "Loss" : "Losses"}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/lose/draw */}
      {gameState && (
        <div className={`game-state ${gameState}`}>
          <div className="game-state-column">
            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>

              {gameState === "win" && <p>Congrats! You won!</p>}
              {gameState === "lose" && <p>Sorry! You lost!</p>}
              {gameState === "draw" && <p>You drew!</p>}

              <p>{renderComponent(computerChoice)}</p>
            </div>
            <button onClick={reStartGame}>Play Again</button>
          </div>
        </div>
      )}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}