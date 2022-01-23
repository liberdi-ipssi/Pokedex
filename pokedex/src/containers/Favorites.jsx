import { useState } from "react";

import { List } from "components";

import "styles/Main.css";

const FavoritesContainer = () => {
    const fav = localStorage.getItem("fav");

    const [searchData, setSearchData] = useState(JSON.parse(fav));

    console.log(searchData);


    return (
        <div className="App">
            <main className="App-main">
                {searchData.length === 0 ? "Pokémon non trouvé" : <List data={searchData} />}
            </main>
        </div>
  );
};

export default FavoritesContainer;