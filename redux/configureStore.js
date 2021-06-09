import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { dailyessentials } from "./dailyessentials";
import { menscollection } from "./menscollection";
import { womenscollection } from "./womenscollection";
import { blog } from "./blog";
import { menscart } from "./menscart";
import { womenscart } from "./womenscart";
import { dailyessentialscart } from "./dailyessentialscart";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dailyessentials,
			menscollection,
			womenscollection,
			blog,
			menscart,
			womenscart,
			dailyessentialscart
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
