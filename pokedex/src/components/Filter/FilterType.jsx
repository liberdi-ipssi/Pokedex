import Select from "react-select";

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
    }),
};

const options = [
    {value:"normal", label: "Normal"},
    {value:"fighting", label: "Fighting"},
    {value:"flying", label: "Flying"},
    {value:"poison", label: "Poison"},
    {value:"ground", label: "Ground"},
    {value:"rock", label: "Rock"},
    {value:"bug", label: "Bug"},
    {value:"ghost", label: "Ghost"},
    {value:"steel", label: "Steel"},
    {value:"fire", label: "Fire"},
    {value:"water", label: "Water"},
    {value:"grass", label: "Grass"},
    {value:"electric", label: "Electric"},
    {value:"psychic", label: "Psychic"},
    {value:"dragon", label: "Dragon"},
    {value:"dark", label: "Dark"},
    {value:"fairy", label: "Fairy"},
    {value:"unknown", label: "Unknown"},
    {value:"shadow", label: "Shadow"},
]

const FilterType = ({handleSubmit, handleChange, value}) => (
    <form onSubmit={handleSubmit}>
        <Select styles={customStyles} options={options} onChange={handleChange} value={value} />
        <input type="submit" value="Envoyer" />
    </form>
  );
  
  export default FilterType;