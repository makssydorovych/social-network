import {instance, LoginResponseDataType, MeResponseDataType, ResponseType} from "./api";

export const authAPI = {
    me() {
        return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseType>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}