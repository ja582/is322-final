import { MoviesState, MoviesActionTypes, ADD_FAVORITE_MOVIE } from './types'

const initialState: MoviesState = {
  favoriteMovies: []
};

export function MoviesReducer(state = initialState, action: MoviesActionTypes):
  MoviesState
{
  switch (action.type) {
    case ADD_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [ action.payload, ...state.favoriteMovies ]
      }

    default:
      return state;
  }

}
