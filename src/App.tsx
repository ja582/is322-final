import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from './components/MenuBar';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Home from './pages/Home';
import Container from "react-bootstrap/Container";


function App() {
  return (
    <Fragment>
        <Container>
      <MenuBar />
      <MovieCard />
       <MovieList />
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
        </Container>
    </Fragment>
  );
}

export default App;
