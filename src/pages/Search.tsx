import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import { SearchTitle } from '../api/TheMovieDb';
import { Movie } from '../store/movies/types';
import { AddMovie } from '../store/movies/actions';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

interface Properties {
  addMovie: Function
}

function Search({ addMovie }: Properties) {
  const [query, setQuery]   = useState('');
  const [movies, setMovies] = useState([]);

  const updateMovies = (res: any) => {
    if (!(res && res.results))
      return;

    setMovies(res.results);
    res.results.forEach((movie: Movie) => addMovie(movie));
  };

  return (
    <Container>
      <SearchBar
        query={query}
        setQuery={setQuery}
        updateData={updateMovies}
        apiCallback={SearchTitle}
      />
      {movies.map((movie: Movie, i: number) => (
        <MovieCard key={i} {...movie} />
      ))}
    </Container>
  );
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMovie: (movie: Movie) => dispatch(AddMovie(movie))
});

export default connect(undefined, mapDispatchToProps)(Search);
