import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import Search from './pages/Search';


function App() {
  return (
    <Fragment>
      <MenuBar />
      <div style={{ padding: '0.5rem' }}></div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/search' component={Search} exact />
        <Route path='/movies' component={Movies} exact />
        <Route path='/movies/:id' component={Movie} />
      </Switch>
    </Fragment>
  );
}

export default App;
