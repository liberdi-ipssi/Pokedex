import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Detail, Loader } from "components";

import "styles/Main.css";

const DetailContainer = () => {
    const {slug} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const [value, setValue] = useState(slug);
    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+value);
            const data = await response.json();

            setData({name: data.name, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(data.id)+".png", id: data.id, weight: data.weight, height: data.height, moves: data.moves, stats: data.stats, types: data.types});
            
            setLoading(false);

        } catch (err) {

            setError(true);
            setLoading(false);

            throw err;
        }
    };
    
    const onClick = (ev) => {
        ev.preventDefault();

        if (localStorage.getItem("fav") !== null) {
            const dataFav = JSON.parse(localStorage.getItem("fav"));

            if (dataFav.filter((pokemon) => pokemon.name == data.name).length !== 0) {
                const removeFav = dataFav.filter((pokemon) => pokemon.name !== data.name);
                localStorage.setItem("fav", JSON.stringify(removeFav));
            }
            else {
                dataFav.push({name: data.name, url: data.url, id: data.id});
                localStorage.setItem("fav", JSON.stringify(dataFav));
            }
        }
        else 
            localStorage.setItem("fav", JSON.stringify([{name: data.name, url: data.url, id: data.id}]));
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    if (isLoading) return <Loader />;
    if (hasError) return <div>Erreur au fetch</div>;

    return (
        <div className="App">
            <main className="App-main">
                <Detail data={data} onClick={(ev)=>onClick(ev)} />
            </main>
        </div>
  );
};

export default DetailContainer;