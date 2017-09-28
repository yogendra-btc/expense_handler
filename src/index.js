// var React = require('react')
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';
import App from './App.js';
import { Router, browserHistory } from 'react-router';
import routs from './routs';
// var App = require('./App.js')
// var ReactDOM = require('react-dom')


// ReactDOM.render(<Demo/>, document.getElementById('root'))

ReactDOM.render(
  <Router history={browserHistory} routes={routs} />,
  document.querySelector('#root')
);
// ReactDOM.render(<Demo/>, document.getElementById('user'))

// ReactDOM.render(
//     <div>
//     <h1>Hello, world!</h1><br/>
//     <input type="text"/><br/><br/>
//     <input type="text" />
//     </div>,
//     document.getElementById('login')
//   );
