import PropTypes from "prop-types";

const Item = ({ name = "", url = "", id = null }) => {
  return (
    <>
      <h2>
        {typeof name === "string" ? name : null}
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