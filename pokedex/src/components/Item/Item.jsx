import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { lowerSlugify } from "utils";

const Item = ({ name = "", url = "", id = null }) => {
  return (
    <>
      <main className="item__profiles">
        <article className="item__profile">
        <img src={typeof url === "string" ? url : null} alt={typeof name === "string" ? name : null} className="item__picture" />
          <Link to={`/list/${lowerSlugify(name)}`}>
            <span className="item__name">
              {typeof name === "string" ? name : null}
            </span>
          </Link>
        </article>
      </main>        
    </>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Item;