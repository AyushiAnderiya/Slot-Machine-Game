import { useState } from 'react'
import './App.css'

const SlowM=()=>{
  let x= '☃️';
  let y= '☃️';
  let z= '☀️';

  if((x===y) && (x===z)){
    return(
      <>
      <div className="game">
        <h1>{x} {y} {z}</h1>
        <h2>Hurreyyy Matching 😃</h2>
        <hr />
      </div>
      </>
    )
  }
  else{
    return(
      <>
      <div className="game">
        <h1>{x} {y} {z}</h1>
        <h2>Try Again, Not Matching 🤕</h2>
        <hr />
      </div>
      </>
    )
  }
}

function App() {
  
  return (
    <>
      <div className="main">
        <div className="head">
        <h1>🎰 FortuneClick: Click To Win🎰</h1>  
        </div>
        <br /> <br />
        <button className='btn'id='first' onClick={SlowM()}>1st Try</button>
        
        <button className='btn' id='second'  onClick={SlowM}>2nd Try</button>
        
        <button className='btn' id='third'  onClick={SlowM}>3rd Try</button>
        
        
        
      </div>
    </>
  )
}

export default App

