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

// Register Users
export const createUserRequest = () => ({
  type: types.CREATE_USER_REQUEST,
});

export const createUserSuccess = () => ({
	type: types.CREATE_USER_SUCCESS,
});

export const createUserFailure = () => ({
	type: types.CREATE_USER_FAILURE,
});
