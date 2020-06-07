import { combineReducers } from "redux";
import { Type } from "./type";

const contactReducer = (state = [], { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	contacts: contactReducer,
});
