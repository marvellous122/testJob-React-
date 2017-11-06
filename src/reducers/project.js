import _ from 'lodash';
import { NEW_PROJECT, NEW_KEYWORD } from '../actions/types/';

const INITIAL_STATE = {
  projects: [
    {
      'text': 'Project 1',
      'id': 1
    },
    {
      'text': 'Project 2',
      'id': 2
    },
    {
      'text': 'Project 3',
      'id': 3
    },
    {
      'text': 'Project 4',
      'id': 4
    },
  ],
  keywords: [
    {
      'text': 'Keyword 1',
      'id': 1
    },
    {
      'text': 'Keyword 2',
      'id': 2
    },
    {
      'text': 'Keyword 3',
      'id': 3
    },
    {
      'text': 'Keyword 4',
      'id': 4
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  const nProject = _.cloneDeep(state.projects);
  const nKeyword = _.cloneDeep(state.keywords);
  switch (action.type) {
    case NEW_PROJECT:
      nProject.push({
        'id': nProject.length+2,
        'text': action.payload
      });
      return {
        ...state,
        projects: nProject
      };

    case NEW_KEYWORD:
      nKeyword.push({
        'id': nKeyword.length+2,
        'text': action.payload
      });
      return {
        ...state,
        keywords: nKeyword
      };

    default:
      return state;
  }
};
