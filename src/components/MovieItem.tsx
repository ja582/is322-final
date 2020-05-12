import React from 'react';
import { Movie } from '../store/movies/types';

interface Properties {
  value: Movie
}

function MovieItem({ value }: Properties) {
  return (
    <div>
      {value.title}
    </div>
  );
}

export default MovieItem;
