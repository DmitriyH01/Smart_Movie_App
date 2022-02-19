import { SEARCH_IMB_SIGN_COUNT } from "../constant/fields";
import { FILTERS } from ".";

const getSelectedSuccess = (data) => ({
  type: FILTERS.IMB,
  data,
});

// const getUnSelectedSuccess = (data) => ({
//   type: FILTERS.ALL,
//   data,
// });

const sortByImb = (field, posters, dispatch) => {
  let selected = null;

  if (SEARCH_IMB_SIGN_COUNT === field.length) {
    posters.forEach((poster) => {
      poster.voteAverage.toString() === field
        ? dispatch(getSelectedSuccess(poster))
        : returnFalse(posters);
    });
  }
};

const returnFalse = (posters) => {};

export default sortByImb;
