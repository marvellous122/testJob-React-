import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { Row, Col } from 'react-bootstrap';

class ProjectDetailList extends Component {
  state = { };

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
      </Breadcrumb>
    );
  }

  render() {
    return (
      <div className="projects">
        {this.renderBreadCrumb()}
        {this.renderHeader()}
        <Row>
          <Col xs={12} xsOffset={0} sm={8} md={6} mdOffset={1}>
            <ul>
              <li>
                <a href={`/projects/${this.props.projectId}/keywords`}>Keywords</a>
              </li>
              <li>
                <a href={`/projects/${this.props.projectId}/segments`}>Segments</a>
              </li>
              <li>
                <a href={`/projects/${this.props.projectId}/wordflows`}>Workflow</a>
              </li>
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
  }
};

const mapStateToProps = ({ project: { projects } }) => {
  return {
    projects
  };
};

export default connect(mapStateToProps)(ProjectDetailList);
