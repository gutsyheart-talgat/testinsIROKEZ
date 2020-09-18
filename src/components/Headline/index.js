import React from 'react'
import style from './headline.module.css'
import Header from './Header'
import Names from './Names'
import Contacts from './Contacts'

export default function (){
    return (
        <div className={style.container}>
            <div className={style.back}>
                <Header />
                <main>
                    <Names />
                    <Contacts />
                </main>
            </div>
        </div>
    )
}