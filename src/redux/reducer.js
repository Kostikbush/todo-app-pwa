import { combineReducers } from "redux";
import { todosReducer } from "./reducers/todosReducer";
import {loaderReducer} from "./reducers/loaderReducer";
import { settingReducer } from "./reducers/settingReducer";
export default combineReducers({
	todosReducer,
	loaderReducer,
	settingReducer,
    
});


