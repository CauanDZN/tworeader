import { useState } from 'react'
import { Reader } from './components/Reader';
import tworeaderImg from "../src/assets/tworeader.svg";



function App() {

  return (
    <>
      <picture>
        <img className="img" src={tworeaderImg} width="300px"></img>
      </picture>

      <div className="pdfdiv">
        <Reader />
        <Reader />
      </div>
      
    </>
  );
}

export default App;