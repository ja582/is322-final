import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';


function Search() {
  const [query, setQuery] = useState('');
  return (
    <Container>
      <SearchBar value={query} setValue={setQuery} />
    </Container>
  );
}


export default connect(undefined)(Search);
