export const ADD_MOVIE       = 'ADD_MOVIE';
export const ADD_FAVORITE    = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export interface Movie {
  id:                 Number,
  title:              String,
  release_date?:      String,
  vote_average?:      Number,
  overview?:          String,
  poster_path?:       String,
  backdrop_path?:     String,
  original_language?: String,
  popularity?:        Number,
  vote_count?:        Number,
  adult:              String,
}

export interface MoviesState {
  movies:    Movie[];
  favorites: Number[];
}

interface AddMovieAction {
  type:    typeof ADD_MOVIE,
  payload: Movie
}

interface AddFavoriteAction {
  type:    typeof ADD_FAVORITE,
  payload: Movie
}

interface RemoveFavoriteAction {
  type:    typeof REMOVE_FAVORITE,
  payload: Movie
}

export type MoviesActionTypes =
  AddMovieAction | AddFavoriteAction | RemoveFavoriteAction;
