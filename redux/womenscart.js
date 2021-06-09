import * as ActionTypes from "./ActionTypes";

export const womenscart = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_WOMENSCART:
			if (state.includes(action.payload)) {
				return state;
			}
			return state.concat(action.payload);
		case ActionTypes.DELETE_WOMENSCART:
			return state.filter((womenscart) => womenscart !== action.payload);
		default:
			return state;
	}
};
