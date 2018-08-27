import axios from 'axios';

import * as actions from '../actions/registerUserActions';

export const fetchPools = () => (
	dispatch => {
		dispatch(actions.fetchPoolsRequest());
		return axios.get(`${process.env.REACT_APP_API_URL}/pools`)
		.then(resp => resp.data)
		.then(payload => dispatch(actions.fetchPoolsSuccess(payload.pools)))
		.catch(() => dispatch(actions.fetchPoolsFailure()));
	}
);

export const createUser = (userId, pool) => (
	dispatch => {
		dispatch(actions.createPoolRequest());
		return axios.post(`${process.env.REACT_APP_API_URL}/pools`, { userId, pool })
		.then(() => dispatch(actions.createPoolSuccess()))
		.catch(() => dispatch(actions.createPoolFailure()));
	}
);
