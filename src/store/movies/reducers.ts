import { HasMovieId } from './helpers';
import { MoviesState, MoviesActionTypes,
  ADD_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE } from './types'


const initialState: MoviesState = {
  movies:    [],
  favorites: [],
};


export function MoviesReducer(state = initialState, action: MoviesActionTypes):
  MoviesState
{
  switch (action.type) {
    /**
     * Add movie to movies store.
     */
    case ADD_MOVIE:
      if (!HasMovieId(state.movies, action.payload.id))
        return {
          ...state, movies: [ ...state.movies, action.payload ]
        };

    /**
     * Add movie to favorites.
     */
    case ADD_FAVORITE:
      if (HasMovieId(state.movies, action.payload.id))
        return {
          ...state, favorites: [ action.payload.id, ...state.favorites ]
        };

    /**
     * Remove movie from favorites.
     */
    case REMOVE_FAVORITE:
      return {
        ...state, favorites: state.favorites.filter((id) => id != action.payload.id)
      };
  }

  return state;
}
