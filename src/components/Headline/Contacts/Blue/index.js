import React from 'react'
import style from './blue.module.css'
import shark from './shark.png'

export default function(){
    return(
        <div className={style.blocks}>
            <div className={style.block}>
                <div className={style.names}>
                    <img src={shark} className={style.foto}/>
                    <div className={style.text}>
                        <h1 className={style.h1}>Name Surname</h1>
                        <p className={style.p}>Employee-position</p>
                    </div>
                </div>
                <div className={style.blue}>Dd Month yyyy - Dd Month yyyy</div>
            </div>
            <div className={style.block}>
                <div className={style.names}>
                    <img src={shark} className={style.foto}/>
                    <div className={style.text}>
                        <h1 className={style.h1}>Name Surname</h1>
                        <p className={style.p}>Employee-position</p>
                    </div>
                </div>
                <div className={style.blue}>Dd Month yyyy - Dd Month yyyy</div>
            </div>
            <div className={style.block}>
                <div className={style.names}>
                    <img src={shark} className={style.foto}/>
                    <div className={style.text}>
                        <h1 className={style.h1}>Name Surname</h1>
                        <p className={style.p}>Employee-position</p>
                    </div>
                </div>
                <div className={style.blue}>Dd Month yyyy - Dd Month yyyy</div>
            </div>
        </div>
    )
}