import axios from 'axios';

import * as actions from '../actions/poolsActions';

export const fetchPools = () => (
	dispatch => {
		dispatch(actions.fetchPoolsRequest());
		return axios.get(`${process.env.REACT_APP_API_URL}/pools`)
		.then(resp => resp.data)
		.then(payload => dispatch(actions.fetchPoolsSuccess(payload.pools)))
		.catch(() => dispatch(actions.fetchPoolsFailure()));
	}
);