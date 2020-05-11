import { Movie, ADD_FAVORITE_MOVIE, MoviesActionTypes } from './types';

export function AddMovie(movie: Movie): MoviesActionTypes {
  return {
    type: ADD_FAVORITE_MOVIE,
    payload: movie
  }
}
