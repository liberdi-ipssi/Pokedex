import { useState } from "react";

import { List } from "components";

import "styles/Main.scss";

const FavoritesContainer = () => {
    const fav = localStorage.getItem("fav");

    const [searchData, setSearchData] = useState(JSON.parse(fav));

    return (
        <div className="Favorites">
            <main className="Favorites-main">
                {searchData.length === 0 ? "No Pokemon Found" : <List data={searchData} />}
            </main>
        </div>
  );
};

export default FavoritesContainer;