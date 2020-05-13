import { HasMovieId } from './helpers';
import { Movie, MoviesState, MoviesActionTypes,
  ADD_MOVIE, REMOVE_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE } from './types'

const initialMovies    = JSON.parse(localStorage.getItem('movies') || '0');
const initialFavorites = JSON.parse(localStorage.getItem('favorites') || '0');

const initialState: MoviesState = {
  movies:    Array.isArray(initialMovies) ? initialMovies : [],
  favorites: Array.isArray(initialFavorites) ? initialFavorites : [],
};


export function MoviesReducer(state = initialState, action: MoviesActionTypes):
  MoviesState
{
  let updatedState = state;

  switch (action.type) {
    /**
     * Add movie to movies store.
     */
    case ADD_MOVIE:
      if (!HasMovieId(state.movies, action.payload.id))
        updatedState =  {
          ...state, movies: [ ...state.movies, action.payload ]
        };
      break;
      
    /**
     * Remove movie to movies store.
     */
    case REMOVE_MOVIE:
      updatedState = {
        ...state, movies: state.movies.filter(
          (movie: Movie) => movie.id !== action.payload.id)
      };
      break;

    /**
     * Add movie to favorites.
     */
    case ADD_FAVORITE:
      if (HasMovieId(state.movies, action.payload.id))
        updatedState = {
          ...state, favorites: [ action.payload.id, ...state.favorites ]
        };
      break;

    /**
     * Remove movie from favorites.
     */
    case REMOVE_FAVORITE:
      updatedState = {
        ...state, favorites: state.favorites.filter(
          (id: Number) => id !== action.payload.id)
      };
      break;
  }

  localStorage.setItem('movies', JSON.stringify(updatedState.movies));
  localStorage.setItem('favorites', JSON.stringify(updatedState.favorites));
  return updatedState;
}
