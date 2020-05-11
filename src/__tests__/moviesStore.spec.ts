import { Movie, ADD_FAVORITE_MOVIE } from '../store/movies/types';
import { moviesReducer } from '../store/movies/reducers';
import { addMovie } from '../store/movies/actions';

describe('movies', () => {
  it('should add movie to favorites', () => {
    const movie = { year: 0, title: 'Test' };
    const updatedState = moviesReducer(undefined, addMovie(movie));

    expect(updatedState.favoriteMovies).toHaveLength(1);
    expect(updatedState.favoriteMovies[0]).toEqual(movie);
  });
});
