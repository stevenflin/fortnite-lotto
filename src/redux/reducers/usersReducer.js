import * as types from '../actionTypes/usersActionTypes';

const initialState = {
	isFetchingActiveUser: false,
	errorFetchingActiveUser: false,
	activeUser: {
		_id: '',
		name: '',
		balance: 0,
		gamesPlayed: 0,
		wins: 0,
		activePools: 0,
	},
};

export default (state = initialState, action) => {
	switch(action.type) {
		case types.FETCH_ACTIVE_USER_REQUEST:
			return {...state, isFetchingActiveUser: true};
		case types.FETCH_ACTIVE_USER_SUCCESS:
			return {...state, isFetchingActiveUser: false, activeUser: action.payload.activeUser};
		case types.FETCH_ACTIVE_USER_FAILURE:
			return {...state, isFetchingActiveUser: false, errorFetchingActiveUser: true};
		default:
			return state;
	}
}