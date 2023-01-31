import stopSubmit from "redux-form"
import {ResultCodeEnum, securityAPI} from "../api/API";
import {ThunkApp} from "./redux-store";
import {authAPI} from "../api/AuthAPI";

const SET_USER_DATA = 'SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'
const initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}
export type InitialAuthStateType = typeof initialState
export const authReducer = (state = initialState, action: ActionsTypes): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return state
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload}

        default:
            state
    }
}

type setAuthUserDataPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type setAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataPayloadType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})


//////THUNK

export const getAuthUserData = () => async (dispatch: any) => {
    const meData = await authAPI.me();
    if (meData.resultCode === ResultCodeEnum.Success ){
        const {id, login, email} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async(dispatch: any) =>{
    const loginData = await authAPI.login(email,password, rememberMe, captcha);
    if(loginData.resultCode === ResultCodeEnum.Success ){
        dispatch(getAuthUserData())
    }else{
        if(loginData.resultCode === ResultCodeEnum.CaptchaIsRequired){
            dispatch(getCaptchaUrlSuccess)
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0]: "some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const getCaptchaUrl = (url): ThunkApp=> async(dispatch)=>{
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = (): ThunkApp=>async (dispatch) =>{
    const response = await authAPI.logout()
    if(response.data.resultCode === ResultCodeEnum.Success){
        dispatch(setAuthUserData(null, null, null,false))
    }
}


export type ActionsTypes = setAuthUserDataType | getCaptchaUrlSuccessType