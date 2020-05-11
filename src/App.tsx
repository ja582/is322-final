import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { Route, Switch }   from 'react-router-dom';
import { connect }         from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">
                    bbbbbbb
                </h1>
            </Jumbotron>
            <h2>Buttons</h2>
        </Container>
    );
}

export default App;
