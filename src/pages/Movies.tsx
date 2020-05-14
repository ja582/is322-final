import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Movie } from '../store/movies/types';
import { RemoveMovie } from '../store/movies/actions';

import MovieList from "../components/MovieList";

interface Properties {
  movies:      Movie[],
  favorites:   Number[],
  addMovie:    Function,
  removeMovie: Function
}

function Movies({ movies, favorites, addMovie, removeMovie }: Properties) {
  const sortedMovies = movies.map(
    (movie) => ({favorite: favorites.includes(movie.id), ...movie})
  ).sort(
  (a: any, b: any) => b.favorite - a.favorite
  );

  return (
    <Container>
      <MovieList data={sortedMovies} removeData={removeMovie} />
    </Container>
  );
}

const mapStateToProps = ({ MoviesReducer }: any) => ({
  movies:    MoviesReducer.movies,
  favorites: MoviesReducer.favorites,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeMovie: (movie: Movie) => dispatch(RemoveMovie(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
