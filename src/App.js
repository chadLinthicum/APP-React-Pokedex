import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PokeRow from "./components/PokeRow";

function App() {
  let [input, setInput] = useState(2);

  const [sprite, setSprite] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [hp, setHP] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");

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
  };

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon/" + input);
  }, [input]);

  function updatePoke(event) {
    setInput(event.target.value);
    fetchData("https://pokeapi.co/api/v2/pokemon/" + input);
    // event.target.value = "";
  }

  return (
    <div className="App">
      <div className="App-content">
        <div className="App-content-header">
          <input
            type="text"
            list="input"
            onChange={(event) => updatePoke(event)}
          />
          <datalist id="input">
            <option>bulbasaur</option>
            <option>ivysaur</option>
            <option>venusaur</option>
          </datalist>
        </div>
        <div className="App-content-character">
          <div className="App-content-character-pic">
            <img id="pokemon" alt="pokemon" src={sprite} />
          </div>
          <div className="App-content-character-info">
            <h2>Data</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Type</th>
                  <th>Weight</th>
                </tr>
                <tr>
                  <td>{name}</td>
                  <td>{number}</td>
                  <td>{type}</td>
                  <td>{weight}</td>
                </tr>
                <tr>
                  <th>HP</th>
                  <th>Attack</th>
                  <th>Defense</th>
                  <th>Speed</th>
                </tr>
                <tr>
                  <td>{hp}</td>
                  <td>{attack}</td>
                  <td>{defense}</td>
                  <td>{speed}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <table id="tenList">
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
        <div className="App-content-navigation">
          <button onClick={() => setInput(input - 1)}>&#60;</button>
          <button onClick={() => setInput(input + 1)}>&#62;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
