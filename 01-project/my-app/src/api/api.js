import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '092b27f6-e91a-4b2d-887d-90fb49f22e6e'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileApi.getProfile(userId)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}