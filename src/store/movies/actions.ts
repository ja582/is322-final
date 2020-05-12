import { Movie, MoviesActionTypes,
  ADD_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE } from './types';

export function AddMovie(movie: Movie): MoviesActionTypes {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function AddFavorite(movie: Movie): MoviesActionTypes {
  return {
    type: ADD_FAVORITE,
    payload: movie
  }
}

export function RemoveFavorite(movie: Movie): MoviesActionTypes {
  return {
    type: REMOVE_FAVORITE,
    payload: movie
  }
}
