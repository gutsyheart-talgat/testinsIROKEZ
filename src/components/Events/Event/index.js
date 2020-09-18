import React from 'react'
import style from './event.module.css'
import dinozavr from './img/dinozavr.png'
import shark from './img/shark.png'
import party from './img/Emote.png'
import plus from './img/Smile.png'
import mess from './img/message.png'
import more from './img/more.png'
import cursor from './img/cursor.png'

export default function(){
    return(
        <div className={style.back}>
            <header className={style.header}>
                <p className={style.headerP}>Водопад событий</p>
                <div className={style.headerCount}>2</div>
            </header>
            <main className={style.main}>
                <div className={style.new}>Новое</div>
                <div className={style.first}>
                    <img src={dinozavr} className={style.dino}/>
                    <div className={style.text}>
                        <div className={style.Name}>
                            <p className={style.company}>Company Sample Name</p>
                            <p className={style.time}>Сегодня, 10:50</p>
                        </div>
                        <div className={style.txt1}>Текст объявления, который написан от лица компании.</div>
                    </div>
                </div>
                <div className={style.More}>
                    <img src={plus} className={style.smile}/>
                    <img src={more} className={style.more}/>
                </div>
                <img src={cursor} className={style.cursor}/>
                <div className={style.second}>
                    <img src={shark} className={style.shark}/>
                    <div className={style.text}>
                        <div className={style.Name}>
                            <p className={style.company}>Калинина Оксана</p>
                            <p className={style.time}>Сегодня, 9:20</p>
                        </div>
                        <div className={style.txt2}>Текст объявления, который написан от лица сотрудника.</div>
                    </div>
                </div>
                <div className={style.yesterday}>Вчера</div>
                <div className={style.fotoBack}></div>
                <div className={style.bottom}>
                    <p className={style.Time}>30 апреля 2020, 12:00</p>
                    <h1 className={style.h1}>
                        Здесь будет находится длинный очень длинный заголовокопубликованной  новости в водопаде событий
                    </h1>
                    <p className={style.info}>
                        Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых... 
                    </p>
                    <div className={style.btns}>
                        <div className={style.check}>
                            <img src={party} className={style.party}/>
                            <p className={style.cifra3}>3</p>
                        </div>
                        <div className={style.checked}>
                            <img src={party} className={style.party}/>
                            <p className={style.cifra5}>5</p>
                        </div>
                        <div className={style.plus}>
                            <img src={plus} className={style.party}/>
                        </div>
                        <div className={style.comment}>
                            <img src={mess} className={style.mess}/>
                            <p className={style.messP}>18 комментариев</p>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
            </main>
        </div>
    )
}