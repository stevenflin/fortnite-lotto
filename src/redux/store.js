import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import pools from './reducers/poolsReducer';
import users from './reducers/usersReducer';
import ui from './reducers/uiReducer';

const reducer = combineReducers({
	pools, users, ui,
});

export default createStore(reducer, applyMiddleware(thunk, logger));