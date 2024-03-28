import React, { useState, useEffect } from 'react';
import './App.css';

const SlowM = ({ x, y, z, onMatch, onMismatch }) => {
  useEffect(() => {
    if (x === y && x === z && typeof onMatch === 'function') {
      setTimeout(() => {
        onMatch();
      }, 0);
    } else if (typeof onMismatch === 'function') {
      setTimeout(() => {
        onMismatch();
      }, 0);
    }
  }, [x, y, z, onMatch, onMismatch]);

  if (x === y && x === z) {
    return (
      <div className="game">
        <h1>{x} {y} {z}</h1>
        <h2>Hurray! Matching 😃</h2>
        <hr />
      </div>
    );
  } else {
    return (
      <div className="game">
        <h1>{x} {y} {z}</h1>
        <h2>Try Again, Not Matching 🤕</h2>
        <hr />
      </div>
    );
  }
}

const Result = ({ a, b }) => {
  if (a > b) {
    return (
      <div className="ab">
        <h1>Fantastic win, congrats! 🤩</h1>
      </div>
    );
  } else {
    return (
      <div className="ab">
        <h1>Better luck next time! 🤒</h1>
      </div>
    );
  }
}

function App() {
  const A = ['🌙', '☀️'];
  const getRandomIndex = () => Math.floor(Math.random() * A.length);

  const [matchCount, setMatchCount] = useState(0);
  const [mismatchCount, setMismatchCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [z1, setZ1] = useState('');

  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [z2, setZ2] = useState('');

  const [x3, setX3] = useState('');
  const [y3, setY3] = useState('');
  const [z3, setZ3] = useState('');

  const handleFirstButtonClick = () => {
    setX1(A[getRandomIndex()]);
    setY1(A[getRandomIndex()]);
    setZ1(A[getRandomIndex()]);
    setClickCount(prevCount => prevCount + 1);
  };

  const handleSecondButtonClick = () => {
    setX2(A[getRandomIndex()]);
    setY2(A[getRandomIndex()]);
    setZ2(A[getRandomIndex()]);
    setClickCount(prevCount => prevCount + 1);
  };

  const handleThirdButtonClick = () => {
    setX3(A[getRandomIndex()]);
    setY3(A[getRandomIndex()]);
    setZ3(A[getRandomIndex()]);
    setClickCount(prevCount => prevCount + 1);
    console.log('clickCount:', clickCount);
  };

  return (
    <div className="main">
      <div className="head">
        <h1>🎰 FortuneClick: Click To Win🎰</h1>
      </div>
      <br /> <br />
      <button className='btn' id='first' onClick={handleFirstButtonClick}>1st Try</button>
      {x1 && y1 && z1 && <SlowM x={x1} y={y1} z={z1} onMatch={() => setMatchCount(prevCount => prevCount + 1)} onMismatch={() => setMismatchCount(prevCount => prevCount + 1)} />}
      <button className='btn' id='second' onClick={handleSecondButtonClick}>2nd Try</button>
      {x2 && y2 && z2 && <SlowM x={x2} y={y2} z={z2} onMatch={() => setMatchCount(prevCount => prevCount + 1)} onMismatch={() => setMismatchCount(prevCount => prevCount + 1)} />}
      <button className='btn' id='third' onClick={handleThirdButtonClick}>3rd Try</button>
      {x3 && y3 && z3 && clickCount === 3 && <SlowM x={x3} y={y3} z={z3} onMatch={() => setMatchCount(prevCount => prevCount + 1)} onMismatch={() => setMismatchCount(prevCount => prevCount + 1)} />}
      {(clickCount === 3) && <div className="res" ><Result a={matchCount} b={mismatchCount} /></div>}
    </div>
  );
}

export default App;
