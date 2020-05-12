import { Movie } from '../store/movies/types';
import { MoviesReducer } from '../store/movies/reducers';
import { AddMovie, AddFavorite, RemoveFavorite } from '../store/movies/actions';
import { HasMovieId } from '../store/movies/helpers';


describe('movies helpers', () => {
  const movies = [{ id: 0, title: '0' }, { id: 1, title: '1' }];
  it('should have movie id', () => {
    expect(HasMovieId(movies, 0)).toBe(true);
    expect(HasMovieId(movies, 1)).toBe(true);
  });

  it('should not have movie id', () => {
    expect(HasMovieId(movies, 2)).toBe(false);
    expect(HasMovieId(movies, 3)).toBe(false);
  });
});


describe('movies reducers', () => {
  const movie = { id: 1000, title: 'Movie' };

  it('should add movie', () => {
    const state = MoviesReducer(undefined, AddMovie(movie));
    expect(state.movies.length).toBe(1);
    expect(state.movies[0]).toEqual(movie);
  });

  it('should not add the duplicate movie', () => {
    const state = MoviesReducer(undefined, AddMovie(movie));
    MoviesReducer(state, AddMovie(movie));
    expect(state.movies.length).toBe(1);
  });

  it('should add movie to favorites', () => {
    // Initialize state
    const movie = { id: 1000, title: 'Test' };
    let state = MoviesReducer(undefined, AddMovie(movie));

    // Add favorite
    state = MoviesReducer(state, AddFavorite(movie));
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toEqual(movie.id);
  });

  it('should not add non-existant movie to favorites', () => {
    const movie = { id: 1000, title: 'Test' };
    const state = MoviesReducer(undefined, AddFavorite(movie));
    expect(state.favorites).toHaveLength(0);
  });

  it('should remove movie from favorites', () => {
    // Initialize state and add favorite
    const movie = { id: 1000, title: 'Test' };
    let state = MoviesReducer(undefined, AddMovie(movie));
    state = MoviesReducer(state, AddFavorite(movie));
    expect(state.favorites).toHaveLength(1);

    // Remove favorite
    state = MoviesReducer(state, RemoveFavorite(movie));
    expect(state.favorites).toHaveLength(0);
  });
});
