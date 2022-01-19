import Select from "react-select";

const options = [
    {value:"normal", label: "Normal"},
    {value:"fire", label: "Fire"},
    {value:"water", label: "Water"},
    {value:"grass", label: "Grass"},
    {value:"electric", label: "Electric"},
    {value:"ice", label: "Ice"},
    {value:"fighting", label: "Fighting"},
    {value:"poison", label: "Poison"},
    {value:"ground", label: "Ground"},
    {value:"psychic", label: "Psychic"},
    {value:"bug", label: "Bug"},
    {value:"rock", label: "Rock"},
    {value:"ghost", label: "Ghost"},
    {value:"dark", label: "Dark"},
    {value:"dragon", label: "Dragon"},
    {value:"steel", label: "Steel"},
    {value:"fairy", label: "Fairy"},
]

const FilterType = ({handleChange, value}) => (
    <Select options={options} onChange={handleChange} value={value} />
  );
  
  export default FilterType;