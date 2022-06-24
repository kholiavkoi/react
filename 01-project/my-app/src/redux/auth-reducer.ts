import {authApi, ResultCodeForCaptcha, ResultCodesEnum, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_REDUCER = 'auth/SET_AUTH_USER_REDUCER';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type initialStateType = typeof initialState


const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_REDUCER:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_REDUCER,
    payload: SetAuthUserDataActionPayloadType
}


export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_REDUCER, payload: {userId, login, email, isAuth}
})

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

export const getAuthUserData = () => {
    return async (dispatch: any) => {
        let meData = await authApi.me()
        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = meData.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string ) => {
    return async (dispatch: any) => {
        let loginData = await authApi.login(email, password, rememberMe, captcha)
        if (loginData.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logout = () => async (dispatch: any) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;