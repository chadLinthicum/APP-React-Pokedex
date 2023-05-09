import React from "react";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PokeRow from "./components/PokeRow";
import bulbasaur from "./assets/1.png";
import pokedex from "./assets/pokedex-logo.png";

function App() {
  const [input, setInput] = useState(1);

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
  const [inputType, setInputType] = useState(type);
  const [inputWeight, setInputWeight] = useState(weight);
  const [inputHP, setInputHP] = useState(hp);
  const [inputAttack, setInputAttack] = useState(attack);
  const [inputDefense, setInputDefense] = useState(defense);
  const [inputSpeed, setInputSpeed] = useState(speed);

  const formRef = useRef();
  const lightRef = useRef();

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

    console.log(data);
  };

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon/" + input);
  }, [input]);

  function updatePoke(event) {
    setInput(event.target.value.toLowerCase());
  }

  function Submit(e) {
    e.preventDefault();
    // console.log(formRef.value); Why doesn't this work?
    formRef.current.reset();

    setInputName(name);
    setInputSprite(sprite);
    setInputNumber(number);
    setInputType(type);
    setInputWeight(weight);
    setInputHP(hp);
    setInputAttack(attack);
    setInputDefense(defense);
    setInputSpeed(speed);

    if (sound) {
      speech();
      lightBlink();
    }
  }

  const [sound, setSound] = useState(true);
  const toggleSound = () => {
    setSound(!sound);
  };

  function speech() {
    if ("speechSynthesis" in window) {
      var msg = new SpeechSynthesisUtterance();
      // var voices = window.speechSynthesis.getVoices();
      // msg.voice = voices[21];
      msg.volume = 1; // From 0 to 1
      msg.rate = 1; // From 0.1 to 10
      msg.pitch = 1.9; // From 0 to 2
      msg.text = name;
      msg.lang = "en";
      speechSynthesis.speak(msg);
    } else {
      alert("Sorry, your browser doesn't support text to speech!");
    }
  }

  function syllableCount(word) {
    word = word.toLowerCase(); //word.downcase!
    if (word.length <= 3) {
      return 1;
    } //return 1 if word.length <= 3
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ""); //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    word = word.replace(/^y/, ""); //word.sub!(/^y/, '')
    return word.match(/[aeiouy]{1,2}/g).length; //word.scan(/[aeiouy]{1,2}/).size
  }

  let counter = 1;
  function lightBlink() {
    function lightColorBlue() {
      lightRef.current.style.backgroundColor = "#74f3f9";
    }
    function lightColorWhite() {
      lightRef.current.style.backgroundColor = "#0e55a6";
    }
    setTimeout(lightColorBlue, 200);
    setTimeout(lightColorWhite, 300);
    if (counter < syllableCount(name)) {
      counter++;
      window.setTimeout(lightBlink, 200);
    }
  }

  function Paginate() {
    //This function is responsible for calling the API with a page number
  }

  return (
    <div className="container">
      <div className="app">
        <header>
          <span className="light" ref={lightRef}></span>
          {/* <span id="title">Pokédex</span> */}
          <img id="title" alt="pokedex" src={pokedex} />
          <input
            className="volume"
            type="checkbox"
            onChange={toggleSound}
          ></input>
        </header>
        <div className="input">
          <form ref={formRef} onSubmit={Submit}>
            <input
              id="input"
              type="text"
              list="drop-down"
              placeholder="Who's That Pokemon!?"
              onChange={(event) => updatePoke(event)}
            />
            <datalist id="drop-down">
              <option>Bulbasaur</option>
              <option>Ivysaur</option>
              <option>Venusaur</option>
              <option>Charmander</option>
              <option>Charmeleon</option>
              <option>Charizard</option>
              <option>Squirtle</option>
              <option>Wartortle</option>
              <option>Blastoise</option>
              <option>Caterpie</option>
              <option>Metapod</option>
              <option>Butterfree</option>
              <option>Weedle</option>
              <option>Kakuna</option>
              <option>Beedrill</option>
              <option>Pidgey</option>
              <option>Pidgeotto</option>
              <option>Pidgeot</option>
              <option>Rattata</option>
              <option>Raticate</option>
              <option>Spearow</option>
              <option>Fearow</option>
              <option>Ekans</option>
              <option>Arbok</option>
              <option>Pikachu</option>
              <option>Raichu</option>
              <option>Sandshrew</option>
              <option>Sandslash</option>
              <option>Nidoran-F</option>
              <option>Nidorina</option>
              <option>Nidoqueen</option>
              <option>Nidoran-M</option>
              <option>Nidorino</option>
              <option>Nidoking</option>
              <option>Clefairy</option>
              <option>Clefable</option>
              <option>Vulpix</option>
              <option>Ninetales</option>
              <option>Jigglypuff</option>
              <option>Wigglytuff</option>
              <option>Zubat</option>
              <option>Golbat</option>
              <option>Oddish</option>
              <option>Gloom</option>
              <option>Vileplume</option>
              <option>Paras</option>
              <option>Parasect</option>
              <option>Venonat</option>
              <option>Venomoth</option>
              <option>Diglett</option>
              <option>Dugtrio</option>
              <option>Meowth</option>
              <option>Persian</option>
              <option>Psyduck</option>
              <option>Golduck</option>
              <option>Mankey</option>
              <option>Primeape</option>
              <option>Growlithe</option>
              <option>Arcanine</option>
              <option>Poliwag</option>
              <option>Poliwhirl</option>
              <option>Poliwrath</option>
              <option>Abra</option>
              <option>Kadabra</option>
              <option>Alakazam</option>
              <option>Machop</option>
              <option>Machoke</option>
              <option>Machamp</option>
              <option>Bellsprout</option>
              <option>Weepinbell</option>
              <option>Victreebel</option>
              <option>Tentacool</option>
              <option>Tentacruel</option>
              <option>Geodude</option>
              <option>Graveler</option>
              <option>Golem</option>
              <option>Ponyta</option>
              <option>Rapidash</option>
              <option>Slowpoke</option>
              <option>Slowbro</option>
              <option>Magnemite</option>
              <option>Magneton</option>
              <option>Farfetchd</option>
              <option>Doduo</option>
              <option>Dodrio</option>
              <option>Seel</option>
              <option>Dewgong</option>
              <option>Grimer</option>
              <option>Muk</option>
              <option>Shellder</option>
              <option>Cloyster</option>
              <option>Gastly</option>
              <option>Haunter</option>
              <option>Gengar</option>
              <option>Onix</option>
              <option>Drowzee</option>
              <option>Hypno</option>
              <option>Krabby</option>
              <option>Kingler</option>
              <option>Voltorb</option>
              <option>Electrode</option>
              <option>Exeggcute</option>
              <option>Exeggutor</option>
              <option>Cubone</option>
              <option>Marowak</option>
              <option>Hitmonlee</option>
              <option>Hitmonchan</option>
              <option>Lickitung</option>
              <option>Koffing</option>
              <option>Weezing</option>
              <option>Rhyhorn</option>
              <option>Rhydon</option>
              <option>Chansey</option>
              <option>Tangela</option>
              <option>Kangaskhan</option>
              <option>Horsea</option>
              <option>Seadra</option>
              <option>Goldeen</option>
              <option>Seaking</option>
              <option>Staryu</option>
              <option>Starmie</option>
              <option>Mr-Mime</option>
              <option>Scyther</option>
              <option>Jynx</option>
              <option>Electabuzz</option>
              <option>Magmar</option>
              <option>Pinsir</option>
              <option>Tauros</option>
              <option>Magikarp</option>
              <option>Gyarados</option>
              <option>Lapras</option>
              <option>Ditto</option>
              <option>Eevee</option>
              <option>Vaporeon</option>
              <option>Jolteon</option>
              <option>Flareon</option>
              <option>Porygon</option>
              <option>Omanyte</option>
              <option>Omastar</option>
              <option>Kabuto</option>
              <option>Kabutops</option>
              <option>Aerodactyl</option>
              <option>Snorlax</option>
              <option>Articuno</option>
              <option>Zapdos</option>
              <option>Moltres</option>
              <option>Dratini</option>
              <option>Dragonair</option>
              <option>Dragonite</option>
              <option>Mewtwo</option>
              <option>Mew</option>
            </datalist>
            <button type="submit">GO!</button>
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
        {/* <div id="tenList">
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
