import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PokeCard from "./Componentes/PokeCard/PokeCard";

const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  background-color: aqua;
  border: 7px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
`

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };
  const pokeOptions = pokeList.map((pokemon) => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <Home>
      <Card>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeOptions}
        </select>
        {pokemon}
      </Card>
    </Home>
  );
}

export default App;
