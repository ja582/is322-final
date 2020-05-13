import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Movie } from '../store/movies/types';
import { RemoveMovie } from '../store/movies/actions';

import MovieList from "../components/MovieList";

interface Properties {
  movies:      Movie[],
  addMovie:    Function,
  removeMovie: Function
}

function Movies({ movies, addMovie, removeMovie }: Properties) {
  return (
    <Container>
      <MovieList data={movies} removeData={removeMovie} />
    </Container>
  );
}

const mapStateToProps = ({ MoviesReducer }: any) => ({
  movies: MoviesReducer.movies
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeMovie: (movie: Movie) => dispatch(RemoveMovie(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
