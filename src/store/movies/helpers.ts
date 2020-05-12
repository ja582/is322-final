import { Movie } from './types';

export function HasMovieId(movies: Array<Movie>, id: Number) {
  return movies.findIndex((movie) => movie.id == id) != -1;
};
