// file: ./src/components/TopBar.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/navigation.css';

class SideBar extends Component {
  handleSignOut(e) {
    e.preventDefault();
    this.props.signOut();
  }
  render() {
    return (
      <div style={styles.sidebarStyle} className="mainSidebar">
        <ul style={styles.ulStyle}>
            <MenuItem header eventKey={2}>GLOBALS</MenuItem>
            <LinkContainer to="/projects">
              <NavItem eventKey={1} title="Accounting" className="sidebar-menu">
                <span><i className="fa fa-folder" />  Projects</span>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/logout">
              <NavItem eventKey={3} title="Accounting" className="sidebar-menu">
                <span><i className="fa fa-sign-in" />  Logout</span>
              </NavItem>
            </LinkContainer>
        </ul>
      </div>
    );
  }
}

const styles={
  sidebarStyle: {
    width: 180,
    height: '100vh',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#484343'
  },
  ulStyle: {
    listStyleType: 'none',
    textAlign: 'left',
  }
}

export default connect()(SideBar);
