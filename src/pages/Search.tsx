import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import { Movie } from '../store/movies/types';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';


function Search() {
  // FOR TESTING PURPOSES ONLY
  const apiResults = require('../api/ExampleOutput.json').results;
  // FOR TESTING PURPOSES ONLY

  const [query, setQuery]   = useState('');
  const [movies, setMovies] = useState(apiResults);

  const updateMovies = (value: string) => {
    setQuery(value);
    if (value)
      setMovies(apiResults);
  };

  return (
    <Container>
      <SearchBar value={query} setValue={updateMovies} />
      {movies.map((movie: Movie, i: number) => (
        <MovieCard {...movie} key={i} />
      ))}
    </Container>
  );
}


export default connect(undefined)(Search);
