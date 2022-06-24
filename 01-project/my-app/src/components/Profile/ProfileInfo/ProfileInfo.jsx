import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user_image.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (data) => {
        saveProfile(data)
            .then(() => {
                setEditMode(false)
            })
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="img"/>

            </div>

            <div className={s.description}>

                <div className={s.photoBlock}>
                    <img src={profile.photos.large || userPhoto} alt=""/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                {editMode ?
                    <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} status={status}
                                     updateStatus={updateStatus}/>
                    :
                    <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                }


            </div>
        </div>

    )

}

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div>
            <b>My name:</b> {profile.fullName}
        </div>
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        <div>
            <b>My prof skills:</b> {profile.lookingForAJobDescription}
        </div>

        <div>
            <b>My contacts:</b>
            {
                Object.keys(profile.contacts).map((key, i) => {
                    return <Contact key={i} contactTitle={key} contactValue={profile.contacts[key]}/>
                })
            }
        </div>
        {isOwner && <button onClick={goToEditMode}>edit</button>}
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;