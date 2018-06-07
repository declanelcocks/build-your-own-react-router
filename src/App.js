import React, { Component } from 'react';

import { Router, Consumer, Route, Link } from './router'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>

          <div className="App-content">
            <Consumer>
              {({ state, action }) => (
                <React.Fragment>
                  <Route path="/">Welcome to the app</Route>
                  <Route path="/products">Welcome to the products page</Route>
                </React.Fragment>
              )}
            </Consumer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
