import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Container from "react-bootstrap/Container";
import Movie from "./pages/Movie";


function App() {
  return (
    <Fragment>
        <Container>
            <MenuBar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Movie' component={Movie} exact />
      </Switch>
        </Container>
    </Fragment>
  );
}

export default App;
