import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import axios from 'axios';


class App extends Component {
  render() {
    return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/search' component={Search} />
                </Switch>
            </Router>
    );
  }
}

export default App;
