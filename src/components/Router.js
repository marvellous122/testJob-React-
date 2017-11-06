// file: ./src/components/Router.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};

export default Routes;
