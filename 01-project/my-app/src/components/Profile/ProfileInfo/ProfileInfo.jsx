import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
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
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <div>
                        Меня зовут: {props.profile.fullName}
                    </div>
                    <div>
                        Обо мне: {props.profile.aboutMe}
                    </div>
                    <div>
                        Работу {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'ищу :('}
                    </div>
                    <div> Мои контакты:
                        {
                        Object.keys(props.profile.contacts).map((contact,i) => {
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