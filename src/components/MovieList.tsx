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
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((movie) => (
          <MovieItem value={movie} />
        ))}
      </tbody>
    </Table>
  );
}

export default MovieList;
