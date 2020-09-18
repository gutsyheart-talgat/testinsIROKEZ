import React from 'react'
import style from './notif.module.css'
import shark from './shark.png'

export default function(){
    return(
        <div className={style.back}>
            <header className={style.header}>
                <p className={style.headerP}>Уведомления</p>
                <div className={style.headerCount}>2</div>
            </header>
            <main className={style.main}>
                <div className={style.mess}>
                    <div>
                        <div className={style.namePath}>
                            <img src={shark} className={style.shark}/>
                            <p className={style.name}>Владимиров Владимир</p>
                            <p className={style.time}>9:22</p>
                        </div>
                        <button className={style.btn}>СОЗДАЁТ СОБЫТИЕ</button>
                    </div>
                    <p className={style.text}> Подготовить обновлённую <br />
                        презентацию разработанного<br />
                        продукта
                    </p>
                </div>
                <div className={style.line}></div>
                <div className={style.mess}>
                    <div>
                        <div className={style.namePath}>
                            <img src={shark} className={style.shark}/>
                            <p className={style.name}>Владимиров Владимир</p>
                            <p className={style.time}>9:22</p>
                        </div>
                        <button className={style.btn}>НАЗНАЧАЕТ ВАМ ЗАДАЧУ</button>
                    </div>
                    <p className={style.text}>
                        Презентация IT-отдела, Улучшение <br/>
                        мобильной платёжной системы.
                    </p>
                    <p className={style.group}>Групповое событие</p>
                </div>
            </main>
            <footer className={style.footer}>уведомления →</footer>
        </div>
    )
}