import * as types from '../actionTypes/poolsActionTypes';

const initialState = {
	isFetchingPools: false,
	errorFetchingPools: false,
	list: [],
};

export default (state = initialState, action) => {
	switch(action.type) {
		case types.FETCH_POOLS_REQUEST:
			return {...state, isFetchingPools: true};
		case types.FETCH_POOLS_SUCCESS:
			return {...state, isFetchingPools: false, list: action.payload.pools};
		case types.FETCH_POOLS_FAILURE:
			return {...state, isFetchingPools: false, errorFetchingPools: true};
		default:
			return state;
	}
}