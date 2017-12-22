
import * as types from "./constants";

export function action() {
	return (dispatch, state) => {
		dispatch({
			type: types.REDUCER,
		});
	};
};

export function count_increment() {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_INCREMENT
		});
	};
};


export function count_decrement() {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_DECREMENT
		});
	};
};