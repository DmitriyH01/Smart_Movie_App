import sortByImb from "./sortImb";

const FiltersWrapper = (movies) => {
  //почему компонент грузится два раза с пустыми movies
  // console.log(movies);
  return (
    <div className="filters_container">
      <input
        className="filters_container_search-field"
        onChange={(e) => sortByImb(e.target.value)}
        // onChange={(e) => searchUser(e.target.value, users, dispatch)}
        type="text"
        name="search"
        placeholder="Find by name..."
      />
    </div>
  );
};

export default FiltersWrapper;
