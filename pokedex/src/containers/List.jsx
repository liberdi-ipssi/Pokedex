import { useEffect, useState } from "react";

import { List } from "components";

import "styles/Main.css";

const ListContainer = () => {
    //const [value, setValue] = useState("");

    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
          );
    
          const data = await response.json();
          const listPokemon = [];
          console.log(data.results);
          data.results.map((pokemon,index) => listPokemon.push({ name: pokemon.name, url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+(index+1)+`.png`, id: Number(index+1) }));
          setData(listPokemon);
        } catch (err) {
          console.error(err);
          throw err;
        }
      };
    
    useEffect(() => {
        fetchAPI();
    }, []);

  return (
    <div className="App">
      <main className="App-main">
        {data.length === 0 ? "Pokémon non trouvé" : <List data={data} />}
      </main>
    </div>
  );
};

export default ListContainer;