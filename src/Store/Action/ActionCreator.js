import { ADD, SUB } from './ActionTypes';

export const sum = () => {
	return {
		type: ADD,
	};
};

export const diff = () => {
	return {
		type: SUB,
	};
};

export const thunk_function = () => {
	// console.log('thunk_function', thunk_function);

	return dispatch => {
		setTimeout(() => {
			dispatch(sum());
		}, 4000);
	};
};
