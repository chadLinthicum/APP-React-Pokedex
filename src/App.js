import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sprite, setSprite] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    console.log(data);
    setName(data.name);
    setType(data.types[0].type.name);
    setSprite(data.sprites.front_default);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Pokédex</h1>
      </div>
      <div className="App-content">
        <div className="App-content-header">
          <input placeholder="Name a character in a galaxy far far away..."></input>
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
                  <th>Name</th>
                  <th>Type</th>
                </tr>
                <tr>
                  <td>{name}</td>
                  <td>{type}</td>
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
