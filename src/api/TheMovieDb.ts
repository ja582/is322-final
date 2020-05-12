import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

function createUrl(params: string): string {
  return `https://api.themoviedb.org/3/search/movie?${params}&api_key=${API_KEY}`;
}

export function SearchTitle(title: string, year?: number) {
  return axios.get(createUrl(`query=${encodeURIComponent(title)}`));
}
