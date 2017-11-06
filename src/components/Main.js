// file: ./src/components/Main.js

import React from 'react';
import { Route } from 'react-router-dom';

// import components
import { Project, ProjectDetail, Keywords, KeywordInfo, Logout } from './projects';

const Main = ({ match }) => {
  return (
    <div style={styles.mainContainerStyle}>
      <div className="container-fluid">
        <Route exact path="/" component={Project} />
        <Route exact path="/projects/" component={Project} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route exact path="/projects/:id/keywords/" component={Keywords} />
        <Route exact path="/projects/:id/keywords/:keyid" component={KeywordInfo} />
        <Route exact path="/logout/" component={Logout} />
      </div>
    </div>
  );
};

const styles={
  mainContainerStyle: {
    width: 'calc(100% - 180px)',
    display: 'inline-block'
  }
}

export default Main;
