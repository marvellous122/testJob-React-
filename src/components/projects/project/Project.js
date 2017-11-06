import React from 'react';
import ProjectList from './projectList';

export const Project = ({ match }) => {
  let crumbs = match.path === '/' ? [] : [{ text: 'Projects', link: '/' }, { active: true }];
  return (
    <ProjectList crumbs={crumbs} title="Projects List" subtitle="Project" />
  );
};
