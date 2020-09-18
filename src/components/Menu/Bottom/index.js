import React from 'react'
import style from './bottom.module.css'
import strela from '../img/strelka.png'
import trend from '../img/trending.png'
import copy from '../img/copy.png'
import peeple from '../img/people.png'
import book from '../img/book.png'
import openbook from '../img/book-open.png'
import setting from '../img/settings.png'
import layers from '../img/layers.png'

export default function(){
    const menu = [
        {id:1, p:'Статистика компании', img: trend},
        {id:2, p:'Структура компании', img: copy},
        {id:3,p:'Сотрудники', img:peeple},
        {id:4,p:'База знаний', img:book},
        {id:5,p:'Новости', img:openbook},
        {id:6,p:'Настройки', img:setting},
        {id:7,p:'Служба поддержки', img:layers}
    ]
    return(
        <div className={style.allblock}>
            <div className={style.title}>
                    <p className={style.titleP}>Администратор</p>
                    <img src={strela} className={style.titleFoto}/>
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