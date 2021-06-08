import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { MovieSelect } from './features';

const App = () => (
  <div className="App">
    <Router>
      <h1>Movie Mash</h1>
      <Switch>
        <Route path="/">
          <MovieSelect />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
