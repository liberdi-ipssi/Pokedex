import PropTypes from "prop-types";

const Detail = ({ data, onClick }) => {
  return (
    <>
        <figure className={"card card--"+data.types[0].type.name}>
            <div className="card__image-container">
                <img src={typeof data.url === "string" ? data.url : null} alt={typeof data.name === "string" ? data.name : null} width="150" height="150" /> 
                <button onClick={onClick} className="ButtonImg">
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107581.png" width="30" height="30" alt="submit" />
                </button>
            </div>
            
    
            <figcaption className="card__caption">
                <h1 className="card__name">{typeof data.name === "string" ? data.name : null}</h1>

                <h3 className="card__type">
                    { data.types.map((pokemon, index) => <div key={index} className={pokemon.type.name}></div>) }
                </h3>

                <table className="card__stats">
                    <tbody>
                        <tr>
                            <th> Height </th>
                            <td> {typeof data.height === "number" ? data.height : null} </td>
                        </tr>
                        <tr>
                            <th> Weight </th>
                            <td> {typeof data.height === "number" ? data.weight : null} </td>
                        </tr>
                        { data.stats.map((pokemon, index) => <tr key={index}><th>{pokemon.stat.name}</th><td>{pokemon.base_stat}</td></tr> ) }
                    </tbody></table>
                
                <div className="card__abilities">
                    <h4 className="card__ability">
                        <span className="card__label">Ability</span>
                        { data.moves.slice(0,3).map((pokemon, index) => <p key={index}> {pokemon.move.name} </p>) }
                </h4>
                </div>
            </figcaption>
        </figure>
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