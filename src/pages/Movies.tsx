import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Movie } from '../store/movies/types';
import { AddMovie } from '../store/movies/actions';

import MovieList from "../components/MovieList";

interface Properties {
  movies:   Movie[],
  addMovie: Function
}

function Movies({ movies, addMovie }: Properties) {
  return (
    <Container>
      <MovieList data={movies} />
    </Container>
  );
}

const mapStateToProps = ({ MoviesReducer }: any) => ({
  movies: MoviesReducer.movies
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMovie: (movie: Movie) => dispatch(AddMovie(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
