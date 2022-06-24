import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'f807f1e5-7e43-4201-bd99-972f7d8dda66'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileApi.getProfile(userId)
    }
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)

    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {id: number, email: string, login: string}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {userId: number}
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export const authApi = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null ) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}