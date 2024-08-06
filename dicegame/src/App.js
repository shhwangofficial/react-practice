import { useState } from 'react';
import Button from './Button';
import Board from './Board';
import "./App.css";
import logo from './assets/logo.png';

function getRandom(N) {
  return Math.ceil(Math.random() * N)
}

function App() {
  const [gameHistory, setGameHistory] = useState([]);
  const [othergameHistory, setotherGameHistory] = useState([]);


  const handleRollClick = () => {
    const nextNum = getRandom(6);
    const othernextNum = getRandom(6);

    setGameHistory([...gameHistory, nextNum]);
    setotherGameHistory([...othergameHistory, othernextNum]);
  };

  const handleClearClick = () => {
    setGameHistory([]);
    setotherGameHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className='App-title'>주사위게임</h1>
        <div>
          <Button buttonType="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
          <Button buttonType="App-button" color="red" onClick={handleClearClick}>초기화</Button>
        </div>
      </div>
      <div className="App-boards">
          <Board classNames="Board App-board" name="나" color="blue" gameHistory={gameHistory} />
          <Board classNames="Board App-board" name="상대" color="red" gameHistory={othergameHistory} />
      </div>
    </div>
  );
}

export default App;