import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { Row, Col } from 'react-bootstrap';
import { newKeyword } from '../../../actions';

class KeywordDetail extends Component {
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
    this.props.newKeyword(this.state.projectText);
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
    const { crumbs, keywords } = this.props;
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
        <span style={style.spanStyle}>{keywords.length}</span>
        <button style={style.addProjectStyle} onClick={this.open.bind(this)}>+ New Keyword</button>
      </Breadcrumb>);
  }

  render() {
    return (
      <div className="projects">
        {this.renderBreadCrumb()}
        {this.renderHeader()}
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Keyword</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>New Keyword</h4>
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
              {this.props.keywords.map((keyword, i) => {
                return (
                  <li key={i}>
                    <a href={`/projects/${this.props.projectId}/keywords/${keyword.id}`}>{keyword.text}</a>
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

const mapStateToProps = ({ project: { keywords } }) => {
  return {
    keywords
  };
};

const mapDispatchToProps = {
  newKeyword
};

export default connect(mapStateToProps, mapDispatchToProps)(KeywordDetail);
