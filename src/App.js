import Navbar from './Navbar.js';
import Home from './Home.js';
import React from 'react';
import Notfound from './Notfound.js'
import Watchlist from './Watchlist.js'
import Random from './Movie.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
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
              <Random />
        </Route>
      </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
