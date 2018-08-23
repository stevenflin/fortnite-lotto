import * as types from '../actionTypes/usersActionTypes';

export const fetchActiveUserRequest = () => ({
	type: types.FETCH_ACTIVE_USER_REQUEST,
});

export const fetchActiveUserSuccess = (activeUser) => ({
	type: types.FETCH_ACTIVE_USER_SUCCESS,
	payload: { activeUser },
});

export const fetchActiveUserFailure = () => ({
	type: types.FETCH_ACTIVE_USER_FAILURE,
});