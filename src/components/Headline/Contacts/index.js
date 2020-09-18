import React from 'react'
import style from './contact.module.css'
import Blue from './Blue'
import Orange from './Orange'
import Red from './Red'

export default function(){
    return (
        <div className={style.back}>
            <Blue />
            <Orange />
            <Red />
        </div>
    )
}