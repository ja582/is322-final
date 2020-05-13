import React from 'react';
import { Movie } from '../store/movies/types';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
var TextTruncate = require('react-text-truncate')

interface Properties {
  item:       Movie,
  removeItem?: Function
}

function MovieItem({ item, removeItem }: Properties) {
  return (
    <tr>
      <td><Link to={`/movies/${item.id}`}>{item.title}</Link></td>
      <td><TextTruncate
        line={1}
        element="span"
        truncateText="..."
        text={`${item.overview}`}
      /></td>
      <td>{item.original_language}</td>
      <td>{item.vote_average}</td>
      <td>{item.release_date}</td>
      <td>{item.adult ? "Yes, 18+" : "No"}</td>
      {typeof removeItem == 'function' &&
        <td>
          <Button onClick={() => removeItem(item)} variant="danger">
            Remove
          </Button>
        </td>}
    </tr>
  );
}

export default MovieItem;
