import { CHANGE_FONT, CHANGE_THEME, GET_SETTINGS, SAVED_SETTINGS, SHOW_ALERT } from "../type";
import { savedIndexDB } from "../../saved-app/indexdb";

const initialState = {
	settingsSaved:{
		theme: "origin",
		font: "sans-seriv",
		alert: true,
		music: false,
	},
	settingVeu: false,
	showTheme: false,
	showFont: false,
};

export const settingReducer = (state=initialState, action) => {
	switch(action.type) {
	case SAVED_SETTINGS:
		savedIndexDB(state.settingsSaved);
		return {
			...state,
		};
	case GET_SETTINGS:
		return {
			...state,
			settingsSaved: action.data,
		};
	case CHANGE_THEME:
		return {
			...state,
			state: state.settingsSaved.theme = action.data.theme,
		};
	case CHANGE_FONT:
		return {
			...state,
			state: state.settingsSaved.font = action.data.font,
		};
	case SHOW_ALERT: 
		return {
			...state,
			state: state.settingsSaved.alert=!state.settingsSaved.alert,
		};
	default: 
		return state;
	}
};