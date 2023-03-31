import {  securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { AppThunkType } from "./redux-store";
import {authAPI} from "../api/AuthAPI";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_URL = "GET-CAPTCHA-URL";

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (
    state: InitialStateType = initialState,
    action: AuthActionsType
) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
} as const);
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL,
    payload: { captchaUrl },
}as const);

export const getAuthUserData = (): AppThunkType => (dispatch) =>
    authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export const logout = (): AppThunkType => (dispatch) =>
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0)
            dispatch(setAuthUserData(null, null, null, false));
    });
export const login =
    (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string | null
    ): AppThunkType =>
        async (dispatch) => {
            const response = await authAPI.login(email, password, rememberMe, captcha);
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                let message =
                    response.data.messages.length > 0
                        ? response.data.messages[0]
                        : "Some error";
                dispatch(stopSubmit("login", { _error: message }));
            }
        };

//types
type InitialStateType = {
    userId: null | number;
    email: null | string;
    login: null | string;
    isAuth: boolean;
    captchaUrl: null | string;
};
type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>;
type setAuthUserDataType = ReturnType<typeof setAuthUserData>;
export type AuthActionsType = getCaptchaUrlSuccessType | setAuthUserDataType;
