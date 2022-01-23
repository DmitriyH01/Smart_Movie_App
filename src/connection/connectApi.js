const connectToApi = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
export default connectToApi;
