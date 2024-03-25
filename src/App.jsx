import React, { useState } from 'react';
import './App.css';

const SlowM = () => {
  let x = '☃️';
  let y = '☃️';
  let z = '☀️';

  if ((x === y) && (x === z)) {
    return (
      <div className="game">
        <h1>{x} {y} {z}</h1>
        <h2>Hurreyyy Matching 😃</h2>
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

function App() {
  const [showSlowM, setShowSlowM] = useState(false);
  const [showSlowM2, setShowSlowM2] = useState(false);
  const [showSlowM3, setShowSlowM3] = useState(false);
  return (
    <div className="main">
      <div className="head">
        <h1>🎰 FortuneClick: Click To Win🎰</h1>
      </div>
      <br /> <br />
      <button className='btn' id='first' onClick={() => setShowSlowM(true)}>1st Try</button>
       {showSlowM && <SlowM />}
      <button className='btn' id='second' onClick={() => setShowSlowM2(true)}>2nd Try</button>
       {showSlowM2 && <SlowM />}
      <button className='btn' id='third' onClick={() => setShowSlowM3(true)}>3rd Try</button>
      {showSlowM3 && <SlowM />}
    </div>
  );
}

export default App;
