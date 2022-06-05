import sortByImb from "../../../actions/sortImb";
import { FILTERS } from "../../../actions";

const FilterByImb = ({ posters, setFilters }) => {
  return (
    <div className="filters_container">
      <input
        className="filters_container_search-field"
        onChange={({ target: { value } }) =>
          value.length === 3 && setFilters(sortByImb(value, posters), FILTERS.IMB)
        }
        type="number"
        name="search"
        placeholder="Enter films rate"
      />
    </div>
  );
};

export default FilterByImb;
