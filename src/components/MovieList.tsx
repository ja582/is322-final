import React from 'react';
import Table from 'react-bootstrap/Table';
import { Movie } from '../store/movies/types';
import MovieItem from './MovieItem';

interface Properties {
  data:        Movie[],
  removeData?: Function
}

function MovieList({ data, removeData }: Properties) {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Favorite</th>
        <th>Title</th>
        <th>Overview</th>
        <th>Language</th>
        <th>Vote</th>
        <th>Date</th>
        <th>Adult</th>
        {typeof removeData == 'function' && <th></th>}
      </tr>
      </thead>
      <tbody>
        {data.map((movie: Movie, i: number) => (
          <MovieItem key={i} removeItem={removeData} item={movie} />
        ))}
      </tbody>
    </Table>
  );
}

export default MovieList;
