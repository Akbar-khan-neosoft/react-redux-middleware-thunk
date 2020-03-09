import { ADD, SUB } from '../Action/ActionTypes';

const initialState = {
	counter: 10,
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return { ...state, counter: state.counter + 1 };

		case SUB:
			return { ...state, counter: state.counter - 1 };

		default:
			return state;
	}
};

export default Reducer;
