import React from 'react'
import style from './header.module.css'
import fanki from './img/Logo.png'
import bell from './img/bell.png'
import lion from './img/lion.png'
import strelka from './img/strelka.png'

export default function (){
    return (
        <div className={style.back}>
            <div className={style.container}>
                <div className={style.d1}>
                    <img src={fanki} className={style.foto}/>
                </div>
                <div className={style.d2}>
                    <div className={style.nav1}>
                        <div className={style.sms}>
                            <img src={bell} className={style.bell}/>
                            <p className={style.p1}>Сообщений нет</p>
                        </div>
                    </div>
                    <div className={style.nav2}>
                        <div className={style.name}>
                            <p className={style.h1}>Александров Александр</p>
                            <p className={style.p2}>Frontend Разработчик</p>
                        </div>
                        <img src={lion} className={style.lion}/>
                        <img src={strelka} className={style.strela}/>
                    </div>
                </div>
            </div>
        </div>
    );
}