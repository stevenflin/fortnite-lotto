import * as types from '../actionTypes/poolsActionTypes';

export const fetchPoolsRequest = () => ({
	type: types.FETCH_POOLS_REQUEST,
});

export const fetchPoolsSuccess = (pools) => ({
	type: types.FETCH_POOLS_SUCCESS,
	payload: { pools },
});

export const fetchPoolsFailure = () => ({
	type: types.FETCH_POOLS_FAILURE,
});