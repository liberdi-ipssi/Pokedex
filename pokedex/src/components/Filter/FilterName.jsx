const FilterName = ({ handleChange, value }) => (
    <>
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="Name" name="name" onChange={handleChange} value={value} required />
        <label htmlFor="name" className="form__label">Name</label>
      </div>
    </>
  );
  
  export default FilterName;