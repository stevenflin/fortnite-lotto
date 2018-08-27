import * as types from '../actionTypes/poolsActionTypes';


// Fetch Pools
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

// Create Pool
export const createPoolRequest = () => ({
	type: types.CREATE_POOL_REQUEST,
});
export const createPoolSuccess = () => ({
	type: types.CREATE_POOL_SUCCESS,
});
export const createPoolFailure = () => ({
	type: types.CREATE_POOL_FAILURE,
});

// Join Pool
export const joinPoolRequest = () => ({
	type: types.JOIN_POOL_REQUEST,
});
export const joinPoolSuccess = () => ({
	type: types.JOIN_POOL_SUCCESS,
});
export const joinPoolFailure = () => ({
	type: types.JOIN_POOL_FAILURE,
});

// Handle Pool Field Changes (e.g. name)
export const handlePoolFieldChange = (field, value) => ({
	type: types.HANDLE_POOL_FIELD_CHANGE,
	payload: { field, value },
});