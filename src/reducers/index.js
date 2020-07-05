import { combineReducers } from 'redux';
import errorReducers from './errorReducers';
import projectReducers from './projectReducers';
import backlogReducers from './backlogReducers';
import securityReducer from './securityReducer';

export default combineReducers({
  errors: errorReducers,
  project: projectReducers,
  backlog: backlogReducers,
  security: securityReducer,
});
