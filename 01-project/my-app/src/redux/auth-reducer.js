import {authApi} from "../api/api";

const SET_AUTH_USER_REDUCER = 'SET_AUTH_USER_REDUCER';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_REDUCER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}




export const setAuthUserData = (userId, login, email) => ({
    type: SET_AUTH_USER_REDUCER, data: {userId, login, email}
})

export const getAuthUserData = () => {
    return (dispatch) => {
        authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, login, email} = response.data.data
                    dispatch(setAuthUserData(userId, login, email))
                }

            })
    }
}



export default authReducer;