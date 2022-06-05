import { nameSortInputs } from "../constant/fields";

const sortByName = (posters, value) => {
  if (value === nameSortInputs.start) {
    return posters.sort((a, b) => comparePostersNames(a.title, b.title));
  }
  if (value === nameSortInputs.end) {
    return posters.sort((a, b) => comparePostersNames(b.title, a.title));
  }
};

const comparePostersNames = (firstName, secondName) => {
  if (firstName > secondName) {
    return 1;
  }
  if (firstName < secondName) {
    return -1;
  }
  return 0;
};

export default sortByName;
