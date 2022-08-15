import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authApi} from "../api/auth-api";
import {securityApi} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";



let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}




const authReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SET_AUTH_USER_REDUCER':
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'auth/SET_AUTH_USER_REDUCER', payload: {userId, login, email, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    } as const)
}




export const getAuthUserData = (): ThunkType => {
    return async (dispatch) => {
        let meData = await authApi.me()
        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = meData.data
            dispatch(actions.setAuthUserData(id, login, email, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string ): ThunkType => {
    return async (dispatch: any) => {
        let loginData = await authApi.login(email, password, rememberMe, captcha)
        if (loginData.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}



export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityApi.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}


export const logout = (): ThunkType => async (dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}


export default authReducer;

export type initialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>
