import * as types from '../actionTypes/poolsActionTypes';

const initialState = {
	isFetchingPools: false,
	isCreatingPool: false,
	errorFetchingPools: false,
	errorCreatingPool: false,
	list: [],
	pool: {
		name: '',
		entry: 1,
		participants: [],
	},
};

export default (state = initialState, action) => {
	switch(action.type) {

		case types.FETCH_POOLS_REQUEST:
			return {...state, isFetchingPools: true};
		case types.FETCH_POOLS_SUCCESS:
			return {...state, isFetchingPools: false, list: action.payload.pools};
		case types.FETCH_POOLS_FAILURE:
			return {...state, isFetchingPools: false, errorFetchingPools: true};

		case types.CREATE_POOL_REQUEST:
			return {...state, isCreatingPool: true};
		case types.CREATE_POOL_SUCCESS:
			return {...state, isCreatingPool: false};
		case types.CREATE_POOL_FAILURE:
			return {...state, isCreatingPool: false, errorCreatingPool: true};

		case types.HANDLE_POOL_FIELD_CHANGE:
			return {...state, pool: {...state.pool, [action.payload.field]: action.payload.value}};

		default:
			return state;
	}
}