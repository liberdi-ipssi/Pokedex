import { useEffect, useState } from "react";

import { List } from "components";

import "styles/Main.css";

const ListContainer = () => {
    //const [value, setValue] = useState("");

    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/bulbasaur"
          );
    
          const data = await response.json();
          console.log(data);
          setData([{ name: data.name, url: data.sprites.front_default, id: data.id }]);
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