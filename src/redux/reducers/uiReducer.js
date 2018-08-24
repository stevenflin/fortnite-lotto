import * as types from '../actionTypes/uiActionTypes';

const initialState = {
	main: {
		modals: {
			showViewModal: false,
			showJoinModal: false,
		},
		activePool: {
			name: ':)',
			entry: 100,
			participants: [],
		},
	},
};

export default (state = initialState, action) => {
	switch(action.type) {
		case types.TOGGLE_MODAL:
			return {
				...state,
				main: {
					...state.main,
					modals: {
						...state.main.modals,
						[action.payload.modalField]: !state.main.modals[action.payload.modalField],
					},
				},
			};
		case types.SET_MODAL_DATA:
			return {
				...state,
				main: {
					...state.main,
					activePool: action.payload.pool,
				},
			};
		default:
			return state;
	}
}