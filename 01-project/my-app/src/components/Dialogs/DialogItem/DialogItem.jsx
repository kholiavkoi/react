import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialogUser}>
            <NavLink to={path} className={s.dialog} activeClassName={s.active}> <img src={props.img} alt=""/> {props.name} </NavLink>
        </div>
    )
}


export default DialogItem;