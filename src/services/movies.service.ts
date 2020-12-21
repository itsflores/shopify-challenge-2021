const API_KEY = "fbafe9b4";
const OMDB_URL = `http://www.omdbapi.com/`;

export const getMoviesByTitle = async (query: string) => {
  const queryEncoded = query.replace(" ", "+");

  return new Promise((resolve) => {
    fetch(
      `${OMDB_URL}?apikey=${API_KEY}&s=${queryEncoded}&page=1`,
      {
        method: "GET",
      }
    ).then((res) => {
      resolve(res.json());
    });
  });
};
