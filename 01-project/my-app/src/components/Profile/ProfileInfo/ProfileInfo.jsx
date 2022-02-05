import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

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

                <div>
                    <img src={profile.photos.large} alt=""/>
                </div>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <div>
                        Меня зовут: {profile.fullName}
                    </div>
                    <div>
                        Обо мне: {profile.aboutMe}
                    </div>
                    <div>
                        Работу {profile.lookingForAJob ? profile.lookingForAJobDescription : 'ищу :('}
                    </div>
                    <div> Мои контакты:
                        {
                        Object.keys(profile.contacts).map((contact,i) => {
                            return (
                                <span key={i}> {contact}, </span>
                            )
                        })
                    }
                    </div>
                </div>


            </div>
        </div>

    )

}

export default ProfileInfo;