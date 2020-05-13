import React from 'react';
import { Movie } from '../store/movies/types';

function MovieItem(movie: Movie) {
  return (
    <tr>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.overview}</td>
      <td>{movie.original_language}</td>
      <td>{movie.vote_average}</td>
      <td>{movie.release_date}</td>
      <td>{movie.adult ? "Yes, 18+" : "No"}</td>
    </tr>
  );
}

export default MovieItem;
