import PropTypes from "prop-types";

const Detail = ({ data, onClick }) => {
  return (
    <>
        <h1>Détail Pokémon</h1>
        <button onClick={onClick}>Favorites</button>
        <h2>
            {typeof data.name === "string" ? data.name : null}
        </h2>
        <img src={typeof data.url === "string" ? data.url : null} />
        <h2>
            Height : {typeof data.height === "number" ? data.height : null}
        </h2>
        <h2>
            Weight : {typeof data.weight === "number" ? data.weight : null}
        </h2>
        <div>
            { data.types.map((pokemon, index) => <p key={index}> {pokemon.type.name} </p>) }
        </div>
        <div>  
            { data.moves.slice(0,3).map((pokemon, index) => <p key={index}> {pokemon.move.name} </p>) }
        </div>
        <div>
            { data.stats.map((pokemon, index) => <p key={index}> {pokemon.stat.name} : {pokemon.base_stat} </p>) }
        </div>
    </>
  );
};

Detail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  types: PropTypes.array,
  moves: PropTypes.array,
  stats: PropTypes.array,
};

export default Detail;