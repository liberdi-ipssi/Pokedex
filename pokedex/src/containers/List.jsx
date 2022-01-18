import { useEffect, useState } from "react";

import { Filter, List, Loader } from "components";

import "styles/Main.css";

const ListContainer = () => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [value, setValue] = useState("");

    const [allData, setAllData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const fetchAPI = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await response.json();
            const listPokemon = [];

            data.results.map((pokemon,index) => listPokemon.push({ name: pokemon.name, url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+(index+1)+`.png`, id: Number(index+1) }));
            
            setAllData(listPokemon);
            setSearchData(listPokemon);
            setLoading(false);

        } catch (err) {

            setError(true);
            setLoading(false);

            throw err;
        }
    };

    const handleChange = (ev) => {
        const { value } = ev.target;

        setValue(value);
        setSearchData(allData.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase())));

        window.history.replaceState(value, "", "/list?search="+value);
        
    };
    
    useEffect(() => {
        fetchAPI();         
    }, []);

    if (isLoading) return <Loader />;
    if (hasError) return <div>Erreur au fetch</div>;

    return (
        <div className="App">
            <main className="App-main">
                <Filter handleChange={handleChange} value={value} />
                {searchData.length === 0 ? "Pokémon non trouvé" : <List data={searchData} />}
            </main>
        </div>
  );
};

export default ListContainer;