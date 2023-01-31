import {instance, ResponseType} from "./API";



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<ResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(follow: boolean, userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(res=>res.data)
    },
    follow(follow: boolean, userId: number) {
        return instance.post(`follow/${userId}`).then(res=>res.data)
    }
}