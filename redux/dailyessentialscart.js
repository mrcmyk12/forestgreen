import * as ActionTypes from "./ActionTypes";

export const dailyessentialscart = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_DAILYESSENTIALSCART:
			if (state.includes(action.payload)) {
				return state;
			}
			return state.concat(action.payload);
		case ActionTypes.DELETE_DAILYESSENTIALSCART:
			return state.filter(
				(dailyessentialscart) => dailyessentialscart !== action.payload
			);
		default:
			return state;
	}
};
