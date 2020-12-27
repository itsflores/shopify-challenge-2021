const API_KEY = process.env.REACT_APP_API_KEY;
const OMDB_URL = `https://www.omdbapi.com/`;

export const getMoviesByTitle = async (query: string) => {
  const queryEncoded = query.trim().replace(" ", "+");

  return new Promise((resolve) => {
    fetch(`${OMDB_URL}?apikey=${API_KEY}&s=${queryEncoded}&type=movie&page=1`, {
      method: "GET",
    }).then((res) => {
      resolve(res.json());
    });
  });
};

export const getMovie = async (id: string) =>
  new Promise((resolve) => {
    fetch(`${OMDB_URL}?apikey=${API_KEY}&i=${id}`, {
      method: "GET",
    }).then((res) => {
      resolve(res.json());
    });
  });

export const movieService = () => {
  
};
