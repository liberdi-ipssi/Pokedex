import reactDom from "react-dom";
import Select from "react-select";

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

const customStyles = {
    option: (provided) => ({
      ...provided,
        color: "black",
        padding: 20,
        display: "block",
        "&:hover": {
            border: "1px solid grey",
            borderRadius: "2%",
            backgroundColor: "rgba(51, 51, 51, 0.18)",
        }
    }),
    singleValue: (provided) => {
        const opacity = 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
    },
    menu: () => ({
        backgroundColor: "transparent",
    })
  }

const FilterType = ({handleSubmit, handleChange, value}) => (
    <div className="FilterType">
        <form onSubmit={handleSubmit}>
            <Select styles={customStyles} options={options} onChange={handleChange} value={value} />
            <input className="SubmitType" type="submit" value="Send" />
        </form>
    </div>
  );
  
  export default FilterType;