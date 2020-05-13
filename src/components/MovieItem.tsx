import React from 'react';
import { Movie } from '../store/movies/types';

interface Properties {
  key:   Number,
  value: Movie
}

function MovieItem({ value }: Properties) {
  return (
    <tr>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.overview}</td>
      <td>{value.original_language}</td>
      <td>{value.vote_average}</td>
      <td>{value.release_date}</td>
    </tr>
  );
}

export default MovieItem;
