
import * as types from "./constants";

export function add_product(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.ADD_PRODUCT,
			payload: payload
		});

	};
};

export function count_increment(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_INCREMENT,
			payload: payload
		});
	};
};


export function count_decrement(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_DECREMENT,
			payload: payload
		});
	};
};

export function delete_product(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.DELETE_PRODUCT,
			payload: payload
		});
	};
};

export function add_product_panier(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.ADD_PRODUCT_PANIER,
			payload: payload
		});

	};
};

export function quantity_increment(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.QUANTITY_INCREMENT,
			payload: payload
		});
	};
};

export function quantity_decrement(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.QUANTITY_DECREMENT,
			payload: payload
		});
	};
};

export function valid_button_add_panier(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.VALID_BUTTON_ADD_PANIER,
			payload: payload
		});
	};
};

export function invalid_button_add_panier(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.INVALID_BUTTON_ADD_PANIER,
			payload: payload
		});
	};
};

export function verif_delete_product_panier(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.VERIF_DELETE_PRODUCT_PANIER,
			payload: payload
		});
	};
};

export function final_price(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.FINAL_PRICE,
			payload: payload
		})
	}
}
