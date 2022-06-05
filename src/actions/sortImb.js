const sortByImb = (value, posters) => {
  let selected = [];
  posters.forEach((poster) => {
    if (`${poster.voteAverage}` === value) {
      selected.push(poster);
    }
  });

  return selected;
};

export default sortByImb;
