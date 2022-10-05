import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [sprite, setSprite] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  // const [abilities, setAbilities] = useState("");
  // const [stats, setStats] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/6");
    console.log(data);
    setSprite(data.sprites.other["official-artwork"].front_default);
    // setSprite(data.sprites.other.home.front_default);
    setNumber(data.id);
    setName(data.name);
    setType(data.types[0].type.name);
    setWeight(data.weight);
    console.log(data.types.length);
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
          <input placeholder="Who's that Pokémon!?"></input>
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
