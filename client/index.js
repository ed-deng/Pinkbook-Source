import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/App.jsx';
import './styles.css';

// BrowserRouter/ Routers - Must wrap top-level <App> element inside a router
// BrowserRouter/ Routers - Required to enable the web server (backend) to serve the same page at all URLs managed on client side

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
