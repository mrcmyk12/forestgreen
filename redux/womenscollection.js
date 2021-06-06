import * as ActionTypes from "./ActionTypes";

export const womenscollection = (
	state = {
		isLoading: true,
		errMess: null,
		womenscollection: []
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_WOMENSCOLLECTION:
			return {
				...state,
				isLoading: false,
				errMess: null,
				womenscollection: action.payload
			};
		case ActionTypes.WOMENSCOLLECTION_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				womenscollection: []
			};
		case ActionTypes.WOMENSCOLLECTION_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };
		default:
			return state;
	}
};
