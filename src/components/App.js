// file: ./src/components/App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from './SideBar';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar {...this.props} />
        <Main match={this.props.match} />
      </div>
    );
  }
}

export default connect()(App);
