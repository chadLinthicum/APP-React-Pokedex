import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [sprite, setSprite] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [hp, setHP] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
    console.log(data);

    setSprite(data.sprites.other["official-artwork"].front_default);
    setNumber(data.id);
    setName(data.name);
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

    for (let i = 0; i < data.types.length; i++) {
      console.log(data.types[i].type.name);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokédex</h1>
      </header>
      <div className="App-content">
        <div className="App-content-header">
          <input type="text" list="input" />
          <datalist id="input">
            <option>Bulbasaur</option>
            <option>Ivysaur</option>
            <option>Venusaur</option>
          </datalist>
        </div>
        <div className="App-content-character">
          <div className="App-content-character-pic">
            <img id="dog" alt="dog" src={sprite} />
          </div>
          <div className="App-content-character-info">
            <h2>Data</h2>
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Weight</th>
                </tr>
                <tr>
                  <td>{number}</td>
                  <td>{name}</td>
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
        <div className="App-content-navigation">
          <h3>&#60; &#62;</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
