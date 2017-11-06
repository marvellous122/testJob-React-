import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { Row, Col } from 'react-bootstrap';
import { newProject } from '../../../actions';

class ProjectList extends Component {
  state = {
    showModal: false,
    projectText: ''
  };

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  add() {
    this.props.newProject(this.state.projectText);
    this.close();
  }

  updateText(evt) {
    this.setState({
      projectText: evt.target.value
    })
  }

  renderHeader() {
    const { title, subtitle } = this.props;
    return (
      <h2 className="page-header" style={style.headerStyle}>
        {title} &nbsp;
        <small>{subtitle}</small>
      </h2>
    );
  }

  renderBreadCrumb() {
    const { crumbs, projects } = this.props;
    return (
      <Breadcrumb>
        {crumbs.map((crumb, i) => {
          if (crumb.active) {
            return (
              <Breadcrumb.Item key={i} active>
                {crumb.text}
              </Breadcrumb.Item>
            );
          }
          return (
            <LinkContainer to={crumb.link} key={i}>
              <Breadcrumb.Item>{crumb.text}</Breadcrumb.Item>
            </LinkContainer>
          );
        })}
        <span style={style.spanStyle}>{projects.length}</span>
        <button style={style.addProjectStyle} onClick={this.open.bind(this)}>+ New Project</button>
      </Breadcrumb>);
  }

  render() {
    return (
      <div className="projects">
        {this.renderBreadCrumb()}
        {this.renderHeader()}
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>New Project</h4>
            <input type="text" onChange={this.updateText.bind(this)} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.add.bind(this)}>Add</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col xs={12} xsOffset={0} sm={8} md={6} mdOffset={1}>
            <ul>
              {this.props.projects.map((project, i) => {
                return (
                  <li key={i}>
                    <a href={`/projects/${project.id}`}>{project.text}</a>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

const style = {
  headerStyle: {
    borderBottom: '1px solid #ccc',
    marginTop: 20,
    marginBottom: 10
  },
  addProjectStyle: {
    float: `right`,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent'
  },
  spanStyle: {
    float: 'right'
  }
};

const mapStateToProps = ({ project: { projects } }) => {
  return {
    projects
  };
};

const mapDispatchToProps = {
  newProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
