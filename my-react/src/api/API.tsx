import axios from "axios";
import {ProfileType} from "../redux/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":
            "27174707-1f72-4acd-871c-461d7e7565ed"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(follow: boolean, userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(follow: boolean, userId: number) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/pgoto`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}
export enum ResultCodeEnum  {
    Success = 0,
    Error = 1,
    CaptchaIsRequired=10

}
type MeResponseType = {
    data: {
        id:number
        email:string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId:number
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res=>res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res=>res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}



