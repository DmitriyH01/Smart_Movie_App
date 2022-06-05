import sortByName from "../../../actions/sortByName";
import { FILTERS } from "../../../actions";

const FilterByName = ({ posters, setFilters }) => {
  return (
    <div className="name-sort_wrapper">
      <input
        type="checkbox"
        id="start_alphabet"
        onChange={({ target: value }) => {
          value.checked && setFilters(sortByName(posters, value.id), FILTERS.START_ALPHABET);
          value.checked = false;
        }}
      ></input>
      <label htmlFor="start_alphabet">Sort from begin</label>
      <input
        type="checkbox"
        id="end_alphabet"
        onChange={({ target: value }) => {
          value.checked && setFilters(sortByName(posters, value.id), FILTERS.END_ALPHABET);
          value.checked = false;
        }}
      ></input>
      <label htmlFor="end_alphabet">Sort from end</label>
    </div>
  );
};

export default FilterByName;
