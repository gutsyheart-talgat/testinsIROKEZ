import React from 'react'
import style from './block.module.css'
import books from './books.png'
import calendar from './calendar.png'

export default function() {
    return (
        <div className={style.allBlock}>
            <div className={style.block1}>
                <header className={style.header}>
                    <p className={style.headerP}>Запросы</p>
                    <div className={style.headerCount}>1</div>
                </header>
                <main className={style.main}>
                    <div className={style.sms}>У вас <button className={style.btn}>2 несогласованных запроса</button> <br/>
                         <div className={style.text}>
                            от сотрудников:
                            <span className={style.span}>Петров Алексей <br/>
                            и Шишкин Егор</span>
                         </div>
                    </div>
                    <div className={style.circle1}>
                        <div className={style.orCircle}></div>
                        <div className={style.whCircle}></div>
                    </div>

                </main>
                <footer>
                    <p className={style.footerP}>Запросы →</p>
                </footer>
            </div>
            <div className={style.block1}>
                <header className={style.header}>
                    <p className={style.headerP}>Календарь</p>
                    <div className={style.headerCount}>1</div>
                </header>
                <main className={style.main}>
                    
                    <div className={style.calendar}>
                        <header className={style.calendarHead}>АВГ</header>
                        <main className={style.calendarMain}>20</main>
                    </div>
                    <p className={style.time}>10:00 - 11:00  |  Групповое событие</p>
                    <p className={style.present}>Презентация мобильной системы</p>
                    <div className={style.circle2}>
                        <div className={style.orCircle}></div>
                        <div className={style.whCircle}></div>
                    </div>
                </main>
                <footer>
                    <p className={style.footerP}>Календарь →</p>
                </footer>
            </div>
            <div className={style.block1}>
                <header className={style.header}>
                    <p className={style.headerP}>База знаний</p>
                    <div className={style.headerCount}>1</div>
                </header>
                <main  className={style.main}>
                    <img src={books} className={style.img}/>
                    <p className={style.P}>Новых публикаций нет</p>
                    <div className={style.circle3}>
                        <div className={style.orCircle}></div>
                        <div className={style.whCircle}></div>
                    </div>
                </main>
                <footer>
                    <p className={style.footerP}>База знаний →</p>
                </footer>
            </div>
        </div>
    )
}