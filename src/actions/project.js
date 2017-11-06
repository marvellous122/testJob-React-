import { NEW_PROJECT, NEW_KEYWORD } from './types/';

export const newProject = text => {
  return {
    type: NEW_PROJECT,
    payload: text
  };
};

export const newKeyword = text => {
  return {
    type: NEW_KEYWORD,
    payload: text
  };
};