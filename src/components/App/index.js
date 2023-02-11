import React, { useState } from "react";
import "./App.css"; 
import PokemonViewer from "../PokemonViewer";
import logo from './logo.png';

function App() {
  const [id, setId] = useState();

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    let randomId = Math.floor(Math.random() * 151) + 1;

    setId(randomId);
  }


  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" /> 

      {/* TODO: call handleClick when button clicked */}
      {/* TODO: hand down id as a prop */}
      <PokemonViewer id = {id}/>
      <button className="button" onClick = {handleClick}>Get Random Pokemon</button>

    </div>
  );
}

export default App;
