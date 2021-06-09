import * as ActionTypes from "./ActionTypes";

export const menscart = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_MENSCART:
			if (state.includes(action.payload)) {
				return state;
			}
			return state.concat(action.payload);
		case ActionTypes.DELETE_MENSCART:
			return state.filter((cart) => cart !== action.payload);
		default:
			return state;
	}
};
