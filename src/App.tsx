import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';


function App() {
  return (
    <Fragment>
      <MenuBar />
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Fragment>
  );
}

export default App;
