
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


class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <div>

            <h2>Topics</h2>
            <ul>
              <li>
                <Link to={'/'}>House Usage</Link>
              </li>
              <li>
                <Link to={'/car'}>Car Usage</Link>
              </li>
              <li>
                <Link to={'/waste'}>Waste</Link>
              </li>
            </ul>

            <Route exact path="/" component={House} />
            <Route path="/car" component={Car} />
            <Route path="/waste" component={Waste} />
          </div>
        </Router>
      </div>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, 
                    document.getElementById('app'));
}