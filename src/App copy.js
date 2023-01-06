import React from "react";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PokeRow from "./components/PokeRow";
import bulbasaur from "./assets/1.png";

function App() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    console.log(inputEl);
    inputEl.current.value.reset();
  };

  return (
    <>
      <h1>hi</h1>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default App;
