import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PokeRow from "./components/PokeRow";
import bulbasaur from "./1.png";

function App() {
  let [input, setInput] = useState(1);

  const [sprite, setSprite] = useState(bulbasaur);
  const [name, setName] = useState("Bulbasaur");
  const [number, setNumber] = useState("1");
  const [type, setType] = useState("Grass/Poison");
  const [weight, setWeight] = useState("69");
  const [hp, setHP] = useState("45");
  const [attack, setAttack] = useState("49");
  const [defense, setDefense] = useState("49");
  const [speed, setSpeed] = useState("65");

  const [inputSprite, setInputSprite] = useState(sprite);
  const [inputName, setInputName] = useState(name);
  const [inputNumber, setInputNumber] = useState(number);
  const [inputType, inputSetType] = useState(type);
  const [inputWeight, inputSetWeight] = useState(weight);
  const [inputHP, inputSetHP] = useState(hp);
  const [inputAttack, inputSetAttack] = useState(attack);
  const [inputDefense, inputSetDefense] = useState(defense);
  const [inputSpeed, inputSetSpeed] = useState(speed);

  const fetchData = async (pokemon) => {
    const { data } = await axios.get(pokemon);

    setName(data.name);
    setSprite(data.sprites.other["official-artwork"].front_default);
    setNumber(data.id);
    setWeight(data.weight);
    setHP(data.stats[0].base_stat);
    setAttack(data.stats[1].base_stat);
    setDefense(data.stats[2].base_stat);
    setSpeed(data.stats[3].base_stat);

    if (data.types.length > 1) {
      setType(data.types[0].type.name + "/" + data.types[1].type.name);
    } else {
      setType(data.types[0].type.name);
    }

    // console.log(data);
  };

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon/" + input);
  }, [input]);

  function updatePoke(event) {
    setInput(event.target.value);
  }

  function Submit(e) {
    e.preventDefault();
    setInputName(name);
    setInputSprite(sprite);
    setInputNumber(number);
    inputSetType(type);
    inputSetWeight(weight);
    inputSetHP(hp);
    inputSetAttack(attack);
    inputSetDefense(defense);
    inputSetSpeed(speed);
  }

  return (
    <div className="container">
      <div className="app">
        <header>Pokedex</header>
        <div className="input">
          <form onSubmit={Submit}>
            <input
              type="text"
              list="drop-down"
              onChange={(event) => updatePoke(event)}
            />
            <datalist id="drop-down">
              <option>squirtle</option>
              <option>wartortle</option>
              <option>blastoise</option>
            </datalist>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="character">
          <div className="character-pic">
            <img id="pokemon" alt="bulbasaur" src={inputSprite} />
          </div>
          <div className="character-data">
            <table id="character-data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Type</th>
                  <th>Weight</th>
                </tr>
                <tr>
                  <td>{inputName}</td>
                  <td>{inputNumber}</td>
                  <td>{inputType}</td>
                  <td>{inputWeight}</td>
                </tr>
                <tr>
                  <th>HP</th>
                  <th>Attack</th>
                  <th>Defense</th>
                  <th>Speed</th>
                </tr>
                <tr>
                  <td>{inputHP}</td>
                  <td>{inputAttack}</td>
                  <td>{inputDefense}</td>
                  <td>{inputSpeed}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div id="tenList">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Type</th>
                <th>Weight</th>
                <th>HP</th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Speed</th>
              </tr>
              <>
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 1)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 2)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 3)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 4)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 5)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 6)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 7)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 8)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 9)}
                />
                <PokeRow
                  pokemon={"https://pokeapi.co/api/v2/pokemon/" + (input + 10)}
                />
              </>
            </thead>
          </table>
        </div>
        <div className="navigation">
          <button onClick={() => setInput(input - 1)}>&#60;</button>
          <button onClick={() => setInput(input + 1)}>&#62;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
