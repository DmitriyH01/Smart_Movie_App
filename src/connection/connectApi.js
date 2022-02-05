import { getMoviesFromApi } from "../services/redux";

const connectToApi = (url) => {
  return (dispatch) =>
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((data) => {
        dispatch(getMoviesFromApi(data.results));
        return data.results;
      })
      .catch((err) => {
        console.error(err.message);
      });
};
export default connectToApi;
