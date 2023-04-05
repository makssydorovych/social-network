import { getAuthUserData } from "./auth-reducer";
import { AppThunkType } from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action: AppActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS } as const);

export const initializeApp = (): AppThunkType => async (dispatch) => {
    dispatch(getAuthUserData());
    dispatch(initializedSuccess());
};

//types
type initializedSuccessType = ReturnType<typeof initializedSuccess>;
export type AppActionsType = initializedSuccessType;
