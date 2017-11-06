import React from 'react';

import KeywordDetail from './keywordDetails';

export const Keywords = ({ match }) => {
  let crumbs = [{ text: 'Projects', link: '/projects/' }, { text: match.params.id, link: `/projects/${match.params.id}` }, { text: 'Keywords', active: true }];
  return (
    <KeywordDetail projectId={match.params.id} crumbs={crumbs} title="Keyword" subtitle="" />
  );
};
