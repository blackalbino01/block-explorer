import React from "react";
import './App.css';
import Block from './Components/Block.js';

const App = () => {

  return (
    
    <div style={{textAlign: "center"}}>
      <div style={{padding: "20px", backgroundColor: "#1976d2", color:"white"}}>
        Block Explorer on Energi Network
      </div>
        <Block/>
    </div>
  );
}

export default App;
