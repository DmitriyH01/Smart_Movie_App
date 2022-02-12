const FiltersContainer = ()=>{
    return (
      <div>
          <input
            // onChange={(e) => searchUser(e.target.value, users, dispatch)}
            className=""
            type="text"
            name="search"
            placeholder="Find by name..."  frwef
          />

          {/* <ul id="filters_menu" className="content__filters__list">
            {storage.filters.map((item) => {
              return (
                <li key={item} className="content__filters__list__item">
                  <label
                    id={item}
                    htmlFor={item}
                  >
                    {item}
                  </label>
                  <input type="radio" id={item} />
                </li>
              );
            })}
          </ul> */}
      </div>
    );
}