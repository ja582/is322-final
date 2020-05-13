import React from 'react';
import { Movie } from '../store/movies/types';
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';

function MovieDetails(movie: Movie) {
  return (
    <div>
      <Image src ={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} thumbnail/>
      <p><h1>{movie.title}</h1></p>
      <p><h5>Released: {movie.release_date} ★ {movie.vote_average}/10</h5></p>
      <p>{movie.overview}</p>
      <p>Original Language: {movie.original_language}</p>
      <p>{movie.adult ? "Adults can only watch this." : "This Movie is for all ages."}</p>
    </div>
  );
}

export default MovieDetails;
