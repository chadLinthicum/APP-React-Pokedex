import logo from "./logo.svg";
import "./App.css";

function App() {
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
          <div className="App-content-character-pic">Character Picture</div>
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
