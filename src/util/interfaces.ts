export interface Movie {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbId: string;
}

export type MovieData = {
  director: string;
  actors: string;
  plot: string;
  awards: string;
} & Movie;
