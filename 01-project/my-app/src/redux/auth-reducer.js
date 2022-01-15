import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_REDUCER, payload: {userId, login, email, isAuth}
})

export const getAuthUserData = () => {
    return (dispatch) => {
       return authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }

            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {

        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logout = () => dispatch => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}


export default authReducer;