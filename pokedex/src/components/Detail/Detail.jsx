import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { lowerSlugify } from "utils";

const Detail = ({ data }) => {
  return (
    <>
        <h1>Détail Pokémon</h1>
        <h2>
            {typeof data.name === "string" ? data.name : null}
        </h2>
        <img src={typeof data.url === "string" ? data.url : null} />
            { data.types.map((pokemon, index) => <p key={index}> {pokemon.type.name} </p>) }
        <h2>
        </h2>
    </>
  );
};

Detail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Detail;