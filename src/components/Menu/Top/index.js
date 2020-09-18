import React from 'react'
import style from './top.module.css'
import strela from '../img/strelka.png'
import glavnaya from '../img/Fanki.png'
import vopros from '../img/question.png'
import flash from '../img/flash.png'
import calendar from '../img/calendar.png'
import book from '../img/book.png'
import openbook from '../img/book-open.png'
import check from '../img/checkmark.png'
import mess from '../img/message.png'

export default function(){
    const menu = [
        {id:1, p:'Запросы', img: flash},
        {id:2, p:'Календарь', img: calendar},
        {id:3,p:'База знаний', img:book},
        {id:4,p:'Новости', img:openbook},
        {id:5,p:'Задачи', img:check},
        {id:6,p:'Чаты', img:mess}
    ]
    return (
        <div className={style.allblock}>
            <div className={style.title}>
                <p className={style.titleP}>Company Name</p>
                <img src={strela} className={style.titleFoto}/>
            </div>
            <div className={style.check}>
                <img src={glavnaya} className={style.checkGlav}/>
                <p className={style.checkP}>Главная</p>
                <img src={vopros} className={style.checkVop}/>
            </div>
            {
                menu.map(block=>(
                    <div key={block.id} className={style.blocks}>
                        <img src={block.img} className={style.foto}/>
                        <p className={style.p}>{block.p}</p>
                    </div>
                ))
            }
        </div>
    )
}