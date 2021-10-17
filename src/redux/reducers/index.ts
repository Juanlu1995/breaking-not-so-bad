import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  App: appReducer,
});

export default rootReducer;
