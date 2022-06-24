import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import styles from './../../Login/Login.css'


const ProfileDataForm = ({status, updateStatus, handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div>
            <b>My name:</b>
            {createField('FullName', 'fullname', [], Input)}
        </div>
        <div>
            <b>About me:</b>
            {createField('AboutMe', 'About me', [], Textarea)}
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField('LookingForAJob', '', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My prof skills:</b>
            {createField('LookingForAJobDescription', 'My professionals skills', [], Textarea)}
        </div>

        <div>
            <b>My contacts:</b>
            {
                Object.keys(profile.contacts).map((key, i) => {
                    return <div key={key} className={s.contacts}>
                        <b>{key}: {createField('contacts.' + key, key, [], Input)}</b>
                    </div>
                })
            }
        </div>
        <button>
            save
        </button>
        {error &&
            <div className={styles.formSummaryError}>
                {error}
            </div>
        }
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;