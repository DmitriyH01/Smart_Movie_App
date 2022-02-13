import FiltersWrapper from "../../components/Flters";
import { useDispatch, useSelector } from "react-redux";
import { hasData, isLoaded, getData } from "../../utils/store";

const FiltersContainer = () => {
  const { movies } = useSelector((state) => state);
  const { filteredMovies } = useSelector((state) => state);
  console.log(movies);

  // console.log(filteredMovies);
  // if (isLoaded(movies)) {
  //   console.log("loaded");
  // }
  // let loaded = isLoaded(movies, []);

  // if (loaded) {
  //   const data = getData(movies, []);
  //   return <FiltersWrapper movies={data} />;
  // }

  // const data = getData(movies, []);
  // return <FiltersWrapper movies={data} />;
  return <FiltersWrapper />;
};

export default FiltersContainer;
