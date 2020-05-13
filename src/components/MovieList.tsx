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
        <th>Title</th>
        <th>Overview</th>
        <th>Original Language</th>
        <th>Vote Average</th>
        <th>Release Date</th>
        <th>Adult</th>
      </tr>
      </thead>
      <tbody>
        {data.map((movie: Movie, i: number) => (
          <MovieItem key={i} {...movie} />
        ))}
      </tbody>
    </Table>
  );
}

export default MovieList;
