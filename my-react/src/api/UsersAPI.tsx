import {instance} from "./API";
import {profileAPI} from "./ProfileAPI";

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
    }
}