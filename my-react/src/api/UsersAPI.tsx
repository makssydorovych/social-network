import {instance, ResponseType,UsersResponseType} from "./api";



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<ResponseType<UsersResponseType>>(`users?page=${currentPage}&count=${pageSize}`).then(res=>res.data)
    },
    unfollow(follow: boolean, userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(res=>res.data)
    },
    follow(follow: boolean, userId: number) {
        return instance.post(`follow/${userId}`).then(res=>res.data)
    }
}
