import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import pools from './reducers/poolsReducer';

const reducer = combineReducers({
	pools,
});

export default createStore(reducer, applyMiddleware(thunk, logger));