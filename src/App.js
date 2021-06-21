import Navbar from './Navbar.js';
import Home from './Home.js';
import React from 'react';
import Notfound from './Notfound.js'
import Watchlist from './Watchlist.js'
import Movie from './Movie.js'
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
        <Route path="/watchlist" exact>
              <Watchlist />
        </Route>
        <Route path="/movie/:name">
              <Movie />
        </Route>
        <Route path="/download/:name">
              <Download />
        </Route>
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
