import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Movie } from '../store/movies/types';
import { AddFavorite, RemoveFavorite } from '../store/movies/actions';
import { Redirect, useParams } from 'react-router-dom';

import MovieDetails from "../components/MovieDetails";


interface Properties {
  movies:         Movie[],
  favorites:      Number[],
  addFavorite:    Function,
  removeFavorite: Function,
}

function MoviePage({ movies, favorites, addFavorite, removeFavorite }: Properties) {
  let { id } = useParams();
  id = parseInt(id);
  const movie = id === 'NaN' ? undefined : movies.find((movie) => movie.id === id);

  // No movie found
  if (!movie)
    return <Redirect to='/movies' />

  return (
    <Container>
      <MovieDetails
        item={movie}
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />
    </Container>
  );
}

const mapStateToProps = ({ MoviesReducer }: any) => ({
  movies:    MoviesReducer.movies,
  favorites: MoviesReducer.favorites,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addFavorite:    (movie: Movie) => dispatch(AddFavorite(movie)),
  removeFavorite: (movie: Movie) => dispatch(RemoveFavorite(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
