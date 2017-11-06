import React from 'react';

import { PageHeader, Breadcrumbs } from '../../common';

export const Logout = ({ match }) => {
  let crumbs = [];
  return (
    <div className="projects">
      <Breadcrumbs crumbs={crumbs} />
      <PageHeader title="Logout" />
    </div>
  );
};
