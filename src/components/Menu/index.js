import React from 'react'
import style from './menu.module.css'
import Top from './Top'
import Bottom from './Bottom'


export default function(){
   
    return (
        <div className={style.menu}>
            <Top />
            <Bottom />
        </div>
    )
}