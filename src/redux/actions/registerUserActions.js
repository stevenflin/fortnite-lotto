import * as types from '../actionTypes/registerUserActionTypes';

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
