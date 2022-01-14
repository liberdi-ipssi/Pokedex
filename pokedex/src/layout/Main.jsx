import { Outlet } from "react-router-dom";
import { Link } from "components";

import "styles/Main.css";

const Main = () => (
    <div className="App">
        <header className="App-header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">Liste des Pokémons</Link>
                    </li>
                    <li>
                        <Link to="/typelist">Liste des Pokémons par Type</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favoris</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main className="App-main">
            <Outlet />
        </main>
    </div>
);

export default Main;