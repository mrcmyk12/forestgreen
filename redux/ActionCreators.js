import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchDailyEssentials = () => (dispatch) => {
	dispatch(dailyessentialsLoading());

	return fetch(baseUrl + "dailyessentials")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((dailyessentials) => dispatch(addDailyEssentials(dailyessentials)))
		.catch((error) => dispatch(dailyessentialsFailed(error.message)));
};

export const dailyessentialsLoading = () => ({
	type: ActionTypes.DAILYESSENTIALS_LOADING
});

export const dailyessentialsFailed = (errMess) => ({
	type: ActionTypes.DAILYESSENTIALS_FAILED,
	payload: errMess
});

export const addDailyEssentials = (dailyessentials) => ({
	type: ActionTypes.ADD_DAILYESSENTIALS,
	payload: dailyessentials
});

export const fetchMensCollection = () => (dispatch) => {
	dispatch(menscollectionLoading());

	return fetch(baseUrl + "menscollection")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((menscollection) => dispatch(addMensCollection(menscollection)))
		.catch((error) => dispatch(menscollectionFailed(error.message)));
};

export const menscollectionLoading = () => ({
	type: ActionTypes.MENSCOLLECTION_LOADING
});

export const menscollectionFailed = (errMess) => ({
	type: ActionTypes.MENSCOLLECTION_FAILED,
	payload: errMess
});

export const addMensCollection = (menscollection) => ({
	type: ActionTypes.ADD_MENSCOLLECTION,
	payload: menscollection
});

export const fetchWomensCollection = () => (dispatch) => {
	dispatch(womenscollectionLoading());

	return fetch(baseUrl + "womenscollection")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((womenscollection) =>
			dispatch(addWomensCollection(womenscollection))
		)
		.catch((error) => dispatch(womenscollectionFailed(error.message)));
};

export const womenscollectionLoading = () => ({
	type: ActionTypes.WOMENSCOLLECTION_LOADING
});

export const womenscollectionFailed = (errMess) => ({
	type: ActionTypes.WOMENSCOLLECTION_FAILED,
	payload: errMess
});

export const addWomensCollection = (womenscollection) => ({
	type: ActionTypes.ADD_WOMENSCOLLECTION,
	payload: womenscollection
});

export const fetchBlog = () => (dispatch) => {
	dispatch(blogLoading());

	return fetch(baseUrl + "blog")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((blog) => dispatch(addBlog(blog)))
		.catch((error) => dispatch(blogFailed(error.message)));
};

export const blogLoading = () => ({
	type: ActionTypes.BLOG_LOADING
});

export const blogFailed = (errMess) => ({
	type: ActionTypes.BLOG_FAILED,
	payload: errMess
});

export const addBlog = (blog) => ({
	type: ActionTypes.ADD_BLOG,
	payload: blog
});
