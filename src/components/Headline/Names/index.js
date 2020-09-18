import React from 'react'
import style from './name.module.css'

export default function() {
    return(
        <div className={style.names}>
            <div className={style.name1}>
                <div className={style.text}>
                    <div className={style.line1}></div>
                    <h1 className={style.h1}>Name</h1>
                </div>
                <p className={style.count}>Count</p>
            </div>
            <div className={style.name}>
                <div className={style.text}>
                    <div className={style.line2}></div>
                    <h1 className={style.h1}>Name</h1>
                </div>
                <p className={style.count}>Count</p>
            </div>
            <div className={style.name}>
                <div className={style.text}>
                    <div className={style.line3}></div>
                    <h1 className={style.h1}>Name</h1>
                </div>
                <p className={style.count}>Count</p>
            </div>
            <div className={style.name}>
                <div className={style.text}>
                    <div className={style.line4}></div>
                    <h1 className={style.h1}>Name</h1>
                </div>
                <p className={style.count}>Count</p>
            </div>
        </div>
    )
}