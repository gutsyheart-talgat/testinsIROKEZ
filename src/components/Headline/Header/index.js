import React from 'react'
import style from './header.module.css'

export default function() {
    return(
        <header className={style.header}>
            <div className={style.title}>
                <h1 className={style.titleH1}>Headline Title</h1>
                <div className={style.titleDiv}>Notifications_Count</div>
            </div>
            <div className={style.pages}>
                <div className={style.nowPage}>DayName, dd mmm</div>
                <div className={style.page}>DayName, dd mmm</div>
                <div className={style.page}>DayName, dd mmm</div>
            </div>
        </header>
    )
}