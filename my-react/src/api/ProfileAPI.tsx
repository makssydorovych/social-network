import {PhotosType, ProfileType} from "../redux/types";
import {instance, ResponseType} from "./API";

type SavePhotoResponse = {
    photos: PhotosType
}
export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/` + userId).then(res=>res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res=>res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status: status}).then(res=>res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<ResponseType<SavePhotoResponse>>(`profile/pgoto`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`profile`, profile).then(res=>res.data)
    }
}