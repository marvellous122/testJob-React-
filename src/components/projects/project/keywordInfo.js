import React from 'react';

import KeywordInfoPage from './keywordInfoPage';

export const KeywordInfo = ({ match }) => {
  let crumbs = [{ text: 'Projects', link: '/projects/' }, { text: match.params.id, link: `/projects/${match.params.id}` }, { text: 'Keywords', link: `/projects/${match.params.id}/keywords/` }, { text: match.params.keyid, active: true }];
  return (
    <KeywordInfoPage crumbs={crumbs}  title="Keyword Info" subtitle="" />
  );
};
