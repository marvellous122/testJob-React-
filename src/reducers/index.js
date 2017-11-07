import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import project from './project';

const defaultReducer = () => [];

const reducers = combineReducers({
  default: defaultReducer,
  project
});

const store = createStore(reducers, {}, compose(applyMiddleware(thunk), autoRehydrate()));

persistStore(store);

export default store;
