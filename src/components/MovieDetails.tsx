import React from 'react';
import { Movie } from '../store/movies/types';
import { Link } from "react-router-dom";
import { Image, Button } from 'react-bootstrap';

interface Properties {
  item:           Movie,
  favorites:      Number[],
  addFavorite:    Function,
  removeFavorite: Function,
}

function MovieDetails({ item, favorites, addFavorite, removeFavorite }: Properties) {
  const favoriteButton = favorites.includes(item.id) ?
    <Button onClick={() => removeFavorite(item)}>Remove Favorite</Button> :
    <Button onClick={() => addFavorite(item)}>Add Favorite</Button>

  return (
    <div>
      {favoriteButton}
      <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} thumbnail/>
      <p><h1>{item.title}</h1></p>
      <p><h5>Released: {item.release_date} ★ {item.vote_average}/10</h5></p>
      <p>{item.overview}</p>
      <p>Original Language: {item.original_language}</p>
      <p>{item.adult ? "Adults can only watch this." : "This Movie is for all ages."}</p>
    </div>
  );
}

export default MovieDetails;
