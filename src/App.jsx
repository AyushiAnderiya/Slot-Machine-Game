import React, { useState } from 'react';
import './App.css';
let a=0,b=0;
const SlowM = ({ x, y, z }) => {
  if (x === y && x === z) {
    a++;
    return (
      <div className="game">
        <h1>{x} {y} {z}</h1>
        <h2>Hurreyyy Matching 😃</h2>
        <hr />
      </div>
    );
  } else {
    b++;
    return (
      <div className="game">
        <h1>{x} {y} {z}</h1>
        <h2>Try Again, Not Matching 🤕</h2>
        <hr />
      </div>
    );
  }
}

function App() {
  const A = ['🌙', '☀️'];
  const getRandomIndex = () => Math.floor(Math.random() * A.length);

  const [showSlowM1, setShowSlowM1] = useState(false);
  const [showSlowM2, setShowSlowM2] = useState(false);
  const [showSlowM3, setShowSlowM3] = useState(false);

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
    setShowSlowM1(true);
  };

  const handleSecondButtonClick = () => {
    setX2(A[getRandomIndex()]);
    setY2(A[getRandomIndex()]);
    setZ2(A[getRandomIndex()]);
    setShowSlowM2(true);
  };

  const handleThirdButtonClick = () => {
    setX3(A[getRandomIndex()]);
    setY3(A[getRandomIndex()]);
    setZ3(A[getRandomIndex()]);
    setShowSlowM3(true);
  };

  return (
    <div className="main">
      <div className="head">
        <h1>🎰 FortuneClick: Click To Win🎰</h1>
      </div>
      <br /> <br />
      <button className='btn' id='first' onClick={handleFirstButtonClick}>1st Try</button>
      {showSlowM1 && <SlowM x={x1} y={y1} z={z1} />}
      <button className='btn' id='second' onClick={handleSecondButtonClick}>2nd Try</button>
      {showSlowM2 && <SlowM x={x2} y={y2} z={z2} />}
      <button className='btn' id='third' onClick={handleThirdButtonClick}>3rd Try</button>
      {showSlowM3 && <SlowM x={x3} y={y3} z={z3} />}
    </div>
  );
}

export default App;
