import stopSubmit from "redux-form"

const SET_USER_DATA = 'SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'
const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}
export type InitialAuthStateType = typeof initialState
export const authReducer = (state = initialState, action: ActionsTypes): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
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
export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccessAC = (captchaUrl: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})


//////THUNK

// export getAuthUserDataTC = () => async (dispatch: any) => {
//     const responce = await authAPI.me();
//     if (responce.data.resultCode === 0 ){
//         const {id, login, email} = responce.data.data;
//         dispatch(setAuthUserDataAC(id, email, login, true));
//     }
// }

// export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => async(dispatch: any) =>{
//     const responce = await authAPI.login(email,password, rememberMe, captcha);
//     if(responce.data.resultCode === 0 ){
//         dispatch(getAuthUserDataTC())
//     }else{
//         if(responce.data.resultCode === 10){
//             dispatch(getCaptchaUrl())
//         }
//         let message = responce.data.messages.length > 0 ? responce.data.messages[0]: "some error";
//         dispatch(stopSubmit("login", {_error: message}));
//     }
//
// }


export type ActionsTypes = setAuthUserDataType | getCaptchaUrlSuccessType