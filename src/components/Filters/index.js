import sortByImb from "../../actions/sortImb";

const FiltersWrapper = ({ posters, dispatch }) => {
  console.log(posters);
  // console.log(dispatch);

  return (
    <div className="filters_container">
      <input
        className="filters_container_search-field"
        onChange={(e) => sortByImb(e.target.value, posters, dispatch)}
        type="number"
        name="search"
        placeholder="Enter films rate"
      />
    </div>
  );
};

export default FiltersWrapper;
