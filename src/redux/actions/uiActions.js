import * as types from '../actionTypes/uiActionTypes';

export const toggleModal = (modalField) => ({
	type: types.TOGGLE_MODAL,
	payload: { modalField },
});

export const setModalData = (pool) => ({
	type: types.SET_MODAL_DATA,
	payload: { pool },
});