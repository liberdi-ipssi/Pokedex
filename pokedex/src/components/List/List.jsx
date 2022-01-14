import PropTypes from "prop-types";

import { Item } from "components";

const List = ({ data }) => (
  <ul>
    {data.map((pokemon, index) => (
      <Item key={index} {...pokemon} />
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;