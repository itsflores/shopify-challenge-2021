const API_KEY = process.env.REACT_APP_API_KEY;
const OMDB_URL = `https://www.omdbapi.com/`;

export const getMoviesByTitle = async (query: string) => {
  const queryEncoded = query.trim().replace(" ", "+");

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
