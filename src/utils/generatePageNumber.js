import { store } from "../store/store";

const generatePage = (page) => {
  switch (page) {
    case "next":
      return store.PAGE + 1;
      break;

    default:
      break;
  }
};
