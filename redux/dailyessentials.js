import * as ActionTypes from "./ActionTypes";

export const dailyessentials = (
	state = {
		isLoading: true,
		errMess: null,
		dailyessentials: []
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_DAILYESSENTIALS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				dailyessentials: action.payload
			};
		case ActionTypes.DAILYESSENTIALS_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				dailyessentials: []
			};
		case ActionTypes.DAILYESSENTIALS_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };
		default:
			return state;
	}
};
