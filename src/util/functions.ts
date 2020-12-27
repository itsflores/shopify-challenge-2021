import { Movie, MovieData } from "./interfaces";

export const genereateMovieData = (movieData: any): MovieData => ({
  poster: movieData.Poster,
  title: movieData.Title,
  year: movieData.Year,
  director: movieData.Director,
  actors: movieData.Actors,
  plot: movieData.Plot,
  awards: movieData.Awards,
  imdbId: movieData.imdbID,
  type: movieData.Type,
});

export const formatMovies = (list: any[]): Movie[] =>
  list.map((movie) => ({
    poster: movie.Poster,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    imdbId: movie.imdbID,
  }));
