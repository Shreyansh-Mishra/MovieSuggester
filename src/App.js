import Navbar from './Navbar.js';
import Home from './Home.js';
import React from 'react';
import Notfound from './Notfound.js'
import Movie from './Movie.js'
import Movies from './Movies.js'
import Download from './Download.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    
      
      <Navbar />
      <div className="content">
      <Switch>
        <Route path="/" exact>
              <Home />
        </Route>
        <Route path="/movie/:name">
              <Movie />
        </Route>
        <Route path="/movies/:name">
              <Movies />
        </Route>
        <Route path="/download/:name">
              <Download />
        </Route>
        <Route path="*">
              <Notfound />
        </Route>
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
