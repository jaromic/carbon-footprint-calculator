
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes some helpers but not React. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Car from './components/Car.js';
import House from './components/House.js';
import Waste from './components/Waste.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

          <div>

            <h2>Topics</h2>
            <ul>
              <li>
                <Link to={'/app/'}>House Usage</Link>
              </li>
              <li>
                <Link to={'/app/car'}>Car Usage</Link>
              </li>
              <li>
                <Link to={'/app/waste'}>Waste</Link>
              </li>
            </ul>

            <Route exact path="/app" component={House} />
            <Route path="/app/car" component={Car} />
            <Route path="/app/waste" component={Waste} />

          </div>

        </Router>
      </Provider>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, 
                    document.getElementById('app'));
}