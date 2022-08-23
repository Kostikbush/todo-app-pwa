import { LOADER_OFF, LOADER_ON } from "../type";

const initialState = {
    loader: false,
}

export const loaderReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOADER_ON:
            return{
                ...state,
                loader: true,
            }
        case LOADER_OFF:
            return {
                ...state,
                loader: false,
            }
        default: 
            return state
    }
}
