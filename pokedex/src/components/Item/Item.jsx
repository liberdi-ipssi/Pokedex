import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { lowerSlugify } from "utils";

const Item = ({ name = "", url = "", id = null }) => {
  return (
    <>
        <h2>
        <Link to={`/list/${lowerSlugify(name)}`}>
            {typeof name === "string" ? name : null}
        </Link>
        </h2>
        <img src={typeof url === "string" ? url : null} />
    </>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Item;