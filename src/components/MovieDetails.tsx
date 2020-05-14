import React from 'react';
import { Movie } from '../store/movies/types';
import { Image, Button } from 'react-bootstrap';

interface Properties {
  item:           Movie,
  favorites:      Number[],
  addFavorite:    Function,
  removeFavorite: Function,
}

function MovieDetails({ item, favorites, addFavorite, removeFavorite }: Properties) {
  const favoriteButton = favorites.includes(item.id) ?
    <Button onClick={() => removeFavorite(item)}>Remove from Favorites</Button> :
    <Button onClick={() => addFavorite(item)}>Add to Favorites</Button>

  return (
    <div>
      <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} thumbnail/>
      <h1>{item.title}</h1>
      <h5>Released: {item.release_date} ⭐ {item.vote_average}/10</h5>
      <p>{item.overview}</p>
      <p>Original Language: {item.original_language}</p>
      <p>{item.adult ? "Adults can only watch this." : "This Movie is for all ages."}</p>
      {favoriteButton}
    </div>
  );
}

export default MovieDetails;
