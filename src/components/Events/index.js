import React from 'react'
import Event from './Event'
import Notif from './Notification'
import style from './events.module.css'

export default function(){
    return(
        <div className={style.back}>
            <Event />
            <Notif />
        </div>
    )
}