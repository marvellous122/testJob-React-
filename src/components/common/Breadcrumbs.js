import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const Breadcrumbs = ({ crumbs }) => {
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
};
