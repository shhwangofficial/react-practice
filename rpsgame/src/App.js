import { useState } from "react";
import "./App.css";
import icReset from "./assets/ic-reset.svg";
import Scoring from "./Scoring";
import Versus from "./Versus";
import Button from "./Button";
import Hand from "./Hand";
import { compareHand, generateRandomHand } from "./utils";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [win, setWin] = useState(0);
  const [otherwin, setOtherWin] = useState(0);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
    setWin(comparison);
    setOtherWin(-1 * comparison);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <img
        class="App-reset"
        src={icReset}
        alt="초기화"
        onClick={handleClearClick}
      />
      <div className="App-scores">
        <Scoring who="나" scoring={score} />
        <Versus>:</Versus>
        <Scoring who="상대" scoring={otherScore} />
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <Hand value={hand} won={win} />
            <Versus>VS</Versus>
            <Hand value={otherHand} won={otherwin} />
          </div>
          <div className="App-bet">
            <span>배점</span>
            <input
              type="number"
              min={1}
              max={9}
              value={bet}
              onChange={handleBetChange}
            />
            <span>배</span>
          </div>
          <div class="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      <Button value="rock" onClick={handleButtonClick} />
      <Button value="scissor" onClick={handleButtonClick} />
      <Button value="paper" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
