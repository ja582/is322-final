import React from 'react';
import { Movie } from '../store/movies/types';

function MovieDetails(movie: Movie) {
  return (
    <div>
      <p>{movie.id}</p>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
      <p>{movie.original_language}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.release_date}</p>
      <p>{movie.adult ? "Yes, 18+" : "No"}</p>
    </div>
  );
}

export default MovieDetails;
