import React, { Fragment } from 'react';
import { Route, Switch }   from 'react-router-dom';
import { connect }         from 'react-redux';
import './App.css';


function App() {

  document.title = 'Movies';

  fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": "5f2818331bmshceba3faa9bcb533p18e145jsned421065d22a"
    }
  })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

  return (
    <div className="App">
      <header className="App-header">
      <p>test</p>
      </header>
    </div>
  );
}

export default App;
