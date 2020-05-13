import React from 'react';
import { Movie } from '../store/movies/types';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from "react-router-dom";
var TextTruncate = require('react-text-truncate')

function MovieItem(movie: Movie) {
  return (
    <tr>
      <td><Link to={`/movies/${movie.id}`}>{movie.title}</Link></td>
      <td><TextTruncate
        line={1}
        element="span"
        truncateText="..."
        text={`${movie.overview}`}
      /></td>
      <td>{movie.original_language}</td>
      <td>{movie.vote_average}</td>
      <td>{movie.release_date}</td>
      <td>{movie.adult ? "Yes, 18+" : "No"}</td>
    </tr>
  );
}

export default MovieItem;
