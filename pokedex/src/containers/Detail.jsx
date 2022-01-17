import { useEffect, useState } from "react";

import { Detail, Loader } from "components";

import "styles/Main.css";

const DetailContainer = (slugValue) => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const [value, setValue] = useState("bulbasaur");
    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+value);
            const data = await response.json();

            console.log(data.types[0].type.name);

            setData({name: data.name, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", types: data.types});
            
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