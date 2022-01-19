const FilterName = ({ handleChange, value }) => (
    <>
      <input onChange={handleChange} value={value} type="text" />
      <p>{value}</p>
    </>
  );
  
  export default FilterName;