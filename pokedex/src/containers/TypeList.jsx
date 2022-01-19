import { useEffect, useState } from "react";

import { FilterType, List, Loader } from "components";

import "styles/Main.css";

const TypeListContainer = () => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [value, setValue] = useState("");

    const [allData, setAllData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    
    let listPokemon = [];
    let listTypePokemon = [];

    const fetchAPI = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
            const data = await response.json();
            
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

    const fetchTypeAPI = async (name, type) => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name);
            const data = await response.json();
            const typePokemon = [];
            data.types.map(pokemon => typePokemon.push(pokemon.type.name));    
            if (typePokemon.includes(type.toLowerCase()))
                listTypePokemon.push({ name: data.name, url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+(data.id)+`.png`, id: Number(data.id) });
            setLoading(false);

        } catch (err) {

            setError(true);
            setLoading(false);

            throw err;
        }
    };

    useEffect(() => {
        fetchAPI();  
    }, []);

    const handleChange = (ev) => {
        const value = ev.value;
        setValue(value);
        console.log(value);

        allData.map(pokemon => fetchTypeAPI(pokemon.name, value)); 
        setSearchData(listTypePokemon);
        console.log(searchData);
    };

    if (isLoading) return <Loader />;
    if (hasError) return <div>Erreur au fetch</div>;

    return (
        <div className="App">
            <main className="App-main">
                <FilterType handleChange={handleChange} value={value} />
                {searchData.length === 0 ? "Pokémon non trouvé" : <List data={searchData} />}
            </main>
        </div>
  );
};

export default TypeListContainer;