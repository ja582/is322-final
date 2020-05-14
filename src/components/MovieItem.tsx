import React from 'react';
import { Movie } from '../store/movies/types';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface Properties {
  item:        Movie,
  removeItem?: Function
}

function MovieItem({ item, removeItem }: Properties) {
  return (
    <tr>
      <td><h1>{item.favorite ? "⭐" : ""}</h1></td>
      <td><Link to={`/movies/${item.id}`}>{item.title}</Link></td>
      <td>{`${item.overview?.slice(0, 50)}...`}</td>
      <td>{item.original_language}</td>
      <td>{item.vote_average}</td>
      <td>{item.release_date}</td>
      <td>{item.adult ? "Yes" : "No"}</td>
      {removeItem &&
        <td>
          <Button onClick={() => removeItem(item)} variant="danger">
            Remove
          </Button>
        </td>}
    </tr>
  );
}

export default MovieItem;
