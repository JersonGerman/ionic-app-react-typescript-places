export const getPhotos = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos?_limit=15").then(
    (response) => response.json()
  );
};
