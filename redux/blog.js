import * as ActionTypes from "./ActionTypes";

export const blog = (
	state = {
		isLoading: true,
		errMess: null,
		blog: []
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_BLOG:
			return {
				...state,
				isLoading: false,
				errMess: null,
				blog: action.payload
			};
		case ActionTypes.BLOG_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				blog: []
			};
		case ActionTypes.BLOG_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };
		default:
			return state;
	}
};
