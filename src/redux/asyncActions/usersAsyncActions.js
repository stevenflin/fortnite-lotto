import axios from 'axios';

import * as actions from '../actions/usersActions';

export const fetchActiveUser = () => (
	dispatch => {
		dispatch(actions.fetchActiveUserRequest());
		return axios.get(`${process.env.REACT_APP_API_URL}/users/default`)
		.then(resp => resp.data)
		.then(payload => dispatch(actions.fetchActiveUserSuccess(payload.activeUser)))
		.catch(() => dispatch(actions.fetchActiveUserFailure()));
	}
);