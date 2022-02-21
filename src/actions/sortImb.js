import { SEARCH_IMB_SIGN_COUNT } from "../constant/fields";
import { FILTERS } from ".";

const getSelectedSuccess = (data) => ({
  type: FILTERS.IMB,
  data,
});

const getUnSelectedSuccess = (data) => ({
  type: FILTERS.ALL,
  data,
});

const sortByImb = (field, posters, dispatch) => {
  let selected = [];

  if (SEARCH_IMB_SIGN_COUNT === field.length) {
    posters.forEach((poster) => {
      if (poster.voteAverage.toString() === field) {
        console.log(poster, "poster - приходит  в экшэн");
        selected.push(poster);
        dispatch(getSelectedSuccess(selected));
      }
      getUnSelectedSuccess(posters);

      // poster.voteAverage.toString() === field
      //   ? dispatch(getSelectedSuccess(poster))
      //   : returnFalse();
    });
  }
};

const returnFalse = () => {};

export default sortByImb;
