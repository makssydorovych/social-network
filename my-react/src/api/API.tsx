import axios from "axios";
import {UserType} from "../redux/types";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":
            "27174707-1f72-4acd-871c-461d7e7565ed"
    }
})

export type ResponseType<D={}, RC=ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
export type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10

}

export type MeResponseDataType = {

        id: number
        email: string
        login: string

}
export type LoginResponseDataType = {
    data: {
        userId: number
    }
}
type GetCaptchaUrlResType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResType>(`security/get-captcha-url`).then(res=>res.data)
    }
}



