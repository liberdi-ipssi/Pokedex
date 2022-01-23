import { useEffect, useState } from "react";

import { FilterType, List, Loader } from "components";

import "styles/Main.css";
import { createPortal } from "react-dom";

const TypeListContainer = () => {

    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const [value, setValue] = useState("");
    const [valueTypeId, setValueTypeId] = useState("");

    const [allData, setAllData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const [listData, setListData] = useState([]);
    
    let listPokemon = [];
    let listType = [];
    let listTypePokemon = [];

    const fetchTypeAPI = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/type");
            const data = await response.json();
            
            data.results.map((type,index) => listType.push({ name: type.name, id: (index+1)}));
            setListData(listType);
            setLoading(false);

        } catch (err) {

            setError(true);
            setLoading(false);

            throw err;
        }
    };

    const fetchAPI = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await response.json();
            
            data.results.map((pokemon,index) => listPokemon.push({ name: pokemon.name, url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+(index+1)+`.png`, id: Number(index+1) }));
            setAllData(listPokemon);
            setFilterData(listPokemon);
            setLoading(false);

        } catch (err) {

            setError(true);
            setLoading(false);

            throw err;
        }
    };

    const fetchListAPI = async (typeID) => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/type/"+typeID);
            const data = await response.json();
            
            data.pokemon.map((pokemons) => {
                if (allData.find(pokemon => pokemon.name.toLowerCase() == pokemons.pokemon.name.toLowerCase()))
                    listTypePokemon.push(allData.find(pokemon => pokemon.name.toLowerCase() == pokemons.pokemon.name.toLowerCase()));
            });
            setFilterData(listTypePokemon);
            setLoading(false);

        } catch (err) {

            setError(true);
            setLoading(false);

            throw err;
        }
    };

    const handleChange = (ev) => {
        const value = ev.value;

        setFilterData([]);
        setValue(value);
        const valueType = listData.find(type => type.name == value);
        setValueTypeId(valueType.id);
        
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        fetchListAPI(valueTypeId);

    };

    useEffect(() => {
        fetchAPI();
        fetchTypeAPI();
    }, []);

    if (isLoading) return <Loader />;
    if (hasError) return <div>Erreur au fetch</div>;

    return (
        <div className="App">
            <main className="App-main">
                <FilterType handleSubmit={handleSubmit} handleChange={handleChange} value={value} />
                {filterData.length === 0 ? "" : <List data={filterData} />}
            </main>
        </div>
  );
};

export default TypeListContainer;