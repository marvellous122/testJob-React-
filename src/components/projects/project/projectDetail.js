import React from 'react';

import ProjectDetailList from './pDetailList';

export const ProjectDetail = ({ match }) => {
  let crumbs = [{ text: 'Projects', link: '/' }, { text: match.params.id, active: true }];
  return (
    <ProjectDetailList projectId={match.params.id} crumbs={crumbs} title="Project" subtitle="Detail" />
  );
};
