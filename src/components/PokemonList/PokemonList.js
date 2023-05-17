import React, {useState, useEffect, useReducer} from "react";
import axios from "axios";

function PokemonList({ searchTerm }) {

  const [List, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
    console.log("res", res.data.results);
    setList(res.data.results);
  }

  return (
    <>
    <ul>
    {List.map((pokemon) => {
      return (
        <li>{pokemon.name}</li>
      )
    }) }
    </ul>
    </>
  );
}

export default PokemonList;
