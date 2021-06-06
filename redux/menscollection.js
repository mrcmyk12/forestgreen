import * as ActionTypes from "./ActionTypes";

export const menscollection = (
	state = {
		isLoading: true,
		errMess: null,
		menscollection: []
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_MENSCOLLECTION:
			return {
				...state,
				isLoading: false,
				errMess: null,
				menscollection: action.payload
			};
		case ActionTypes.MENSCOLLECTION_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				menscollection: []
			};
		case ActionTypes.MENSCOLLECTION_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };
		default:
			return state;
	}
};
