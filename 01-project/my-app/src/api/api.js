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
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}