import {
	combineReducers
} from "redux";


import count from "./count/reducer";
import products from "./products/reducer";

export default
	combineReducers({
		count,
		products,
	});

