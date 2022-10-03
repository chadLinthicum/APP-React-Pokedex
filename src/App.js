import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const axios = require("axios");
  const [dog, setDog] = useState("");

  function componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDog(response.data.message);
      console.log(response.data.message);
    });
  }

  useEffect(() => {
    componentDidMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Star Wars</h1>
      </div>
      <div className="App-content">
        <div className="App-content-header">
          <input placeholder="Name a character in a galaxy far far away..."></input>
        </div>
        <div className="App-content-character">
          <div className="App-content-character-pic">
            <img id="dog" alt="dog" src={dog} />
          </div>
          <div className="App-content-character-info">Character Info</div>
        </div>
        <div className="App-content-navigation">
          <h3>&#60; &#62;</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
