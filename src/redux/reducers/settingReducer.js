import { CHANGE_FONT, CHANGE_THEME, GET_SETTINGS, SAVED_SETTINGS, SHOW_ALERT } from "../type";
import { savedIndexDB } from './../../saved-app/indexdb';

const initialState = {
    settingsSaved:{
        theme: 'origin',
        font: 'sans-seriv',
        alert: true,
        music: false,
    },
    settingVeu: false,
    showTheme: false,
    showFont: false,
}

export const settingReducer = (state=initialState, action) => {
    switch(action.type) {
        case SAVED_SETTINGS:
            console.log('saved')
            savedIndexDB(state.settingsSaved)
            return {
                ...state
            }
        case GET_SETTINGS:
            console.log(state.settingsSaved)
            return {
                ...state,
                settingsSaved: action.data
            }
        case CHANGE_THEME:
            return {
                ...state,
                state: state.settingsSaved.theme = action.data.theme,
            }
        case CHANGE_FONT:
            return {
                ...state,
                state: state.settingsSaved.font = action.data.font
            }
        case SHOW_ALERT: 
            console.log(state.settingsSaved)
        return {
            ...state,
            state: state.settingsSaved.alert=!state.settingsSaved.alert,
        }
        default: 
            return state
    }
}