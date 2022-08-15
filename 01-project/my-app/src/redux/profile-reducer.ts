import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileApi} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Its my first post',
            likesCount: 14,
        },
        {
            id: 2,
            message: 'My first react app',
            likesCount: 23,
        },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}



const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {
            let newPost = {
                id: 3,
                message: action.newPost,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {
            return {
                ...state, profile: action.profile
            }
        }
        case 'SN/PROFILE/SET_STATUS': {
            return {
                ...state, status: action.status
            }
        }
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (newPost: string) => ({
        type: 'SN/PROFILE/ADD-POST', newPost
    } as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}




export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileApi.getProfile(userId)
        dispatch(actions.setUserProfile(data))
    }
}

export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileApi.getStatus(userId)
        dispatch(actions.setStatus(data))
    }
}

export const updateStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileApi.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(actions.setStatus(status))
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileApi.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileApi.saveProfile(profile)
    if (data.resultCode === 0) {
        if (userId !== null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error('User id cant be null')
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        // dispatch(stopSubmit('edit-profile', {'contacts': {'facebook': response.data.messages[0]}}))
        return Promise.reject(data.messages[0])
    }

}


export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>