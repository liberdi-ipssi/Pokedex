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

            setData({name: data.name, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(data.id)+".png", weight: data.weight, height: data.height, moves: data.moves, stats: data.stats, types: data.types});
            
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

    if (isLoading) return <Loader />;
    if (hasError) return <div>Erreur au fetch</div>;

    return (
        <div className="App">
            <main className="App-main">
                <Detail data={data} />
            </main>
        </div>
  );
};

export default DetailContainer;