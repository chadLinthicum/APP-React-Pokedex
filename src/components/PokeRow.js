import { useState, useEffect } from "react";
import axios from "axios";

const PokeRow = ({ pokemon }) => {
  // const [sprite, setSprite] = useState("");
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
    // setSprite(data.sprites.other["official-artwork"].front_default);
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
    fetchData(pokemon);
  }, []);

  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
      <td>{type}</td>
      <td>{weight}</td>
      <td>{hp}</td>
      <td>{attack}</td>
      <td>{defense}</td>
      <td>{speed}</td>
    </tr>
  );
};

export default PokeRow;
