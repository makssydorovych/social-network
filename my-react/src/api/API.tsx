import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":
            "27174707-1f72-4acd-871c-461d7e7565ed"
    }
})
export const usersAPI = {
   getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(follow: boolean, id: number) {
       return instance.delete(`follow/${id}`)
           .then(response => {
               return response.data
           })
    }
}



