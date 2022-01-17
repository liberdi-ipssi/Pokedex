const Form = ({ handleChange, value }) => (
    <>
      <input onChange={handleChange} value={value} type="text" />
      <p>{value}</p>
    </>
  );
  
  export default Form;