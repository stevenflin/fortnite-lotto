import axios from 'axios';

import * as actions from '../actions/poolsActions';
import { fetchActiveUser } from '../asyncActions/usersAsyncActions';

export const fetchPools = (userId) => (
	async dispatch => {
		dispatch(actions.fetchPoolsRequest());
		return axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/pools`)
		.then(resp => resp.data)
		.then(payload => dispatch(actions.fetchPoolsSuccess(payload.pools)))
		.catch(() => dispatch(actions.fetchPoolsFailure()));
	}
);

export const fetchActiveUserPools = (userId) => (
	dispatch => {
		dispatch(actions.fetchActiveUserPoolsRequest());
		return axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/pools/joined`)
		.then(resp => resp.data)
		.then(payload => dispatch(actions.fetchActiveUserPoolsSuccess(payload.pools)))
		.catch(() => dispatch(actions.fetchActiveUserPoolsFailure()));
	}
);

export const createPool = (userId, pool) => (
	async dispatch => {
		dispatch(actions.createPoolRequest());
		try {
			await axios.post(`${process.env.REACT_APP_API_URL}/pools`, { userId, pool })
			dispatch(actions.createPoolSuccess());
		} catch (e) {
			dispatch(actions.createPoolFailure());
		}
	}
);

// TODO: should this be in recordsAsyncActions?
export const joinPool = (record, entry) => (
	async dispatch => {
		dispatch(actions.joinPoolRequest());
		try {
			await axios.post(`${process.env.REACT_APP_API_URL}/records`, { record, entry });
			dispatch(actions.joinPoolSuccess());
			dispatch(fetchPools());
			dispatch(fetchActiveUser());
		} catch (e) {
			dispatch(actions.joinPoolFailure());
		}
	}
);
