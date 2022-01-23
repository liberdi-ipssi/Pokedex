import { Outlet } from "react-router-dom";
import { Link } from "components";

import "styles/Main.scss";

const Main = () => (
    <div className="App">
        <header className="App-header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">Pokemon List</Link>
                    </li>
                    <li>
                        <Link to="/typelist">Pokemon Type</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
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