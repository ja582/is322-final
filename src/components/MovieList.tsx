import React from 'react';
import Table from 'react-bootstrap/Table';
import { Movie } from '../store/movies/types';
import MovieItem from './MovieItem';

interface Properties {
  data: Movie[]
}

function MovieList({ data }: Properties) {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>id</th>
        <th>Title</th>
        <th>Overview</th>
        <th>Original Language</th>
        <th>Vote Average</th>
        <th>Release Date</th>
        <th>Adult</th>
      </tr>
      </thead>
      <tbody>
      {data.map((movie, i) => (
        <MovieItem value={movie} key={i} />
      ))}
      </tbody>
    </Table>
  );
}

export default MovieList;