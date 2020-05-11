export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE';

export interface Movie {
  year: Number,
  title: String,
  director?: String
}

export interface MoviesState {
  favoriteMovies: Movie[];
}

interface AddFavoriteMovieAction {
  type: typeof ADD_FAVORITE_MOVIE,
  payload: Movie
}

export type MoviesActionTypes = AddFavoriteMovieAction;
