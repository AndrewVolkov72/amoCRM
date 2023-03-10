import React from 'react'
import { IListItem } from '../../interface/IListItem'
import { IList } from '../List/interface'
import { List } from '../List/List'
import {ReactComponent as Telegram} from '../../images/telegram.svg'
import {ReactComponent as Phone} from '../../images/phone.svg'
import {ReactComponent as WhatsUp} from '../../images/whatsup.svg'
import './footer.scss'

export const Footer = () => {
  const companyItems:IListItem[] = [
    {name:'Партнёрская программа', link:'#'},
    {name:'Вакансии', link:'#'},
  ]

  const menuItems:IListItem[] = [
    {name:'Расчёт стоимости', link:'#'},
    {name:'Услуги', link:'#'},
    {name:'Виджеты', link:'#'},
    {name:'Интеграции', link:'#'},
    {name:'Наши клиенты', link:'#'},
  ]

  const advantagesItems:IListItem[] = [
    {name:'Кейсы', link:'#'},
    {name:'Благодарственные письма', link:'#'},
    {name:'Сертификаты', link:'#'},
    {name:'Блог на Youtube', link:'#'},
    {name:'Вопрос / Ответ', link:'#'},
  ]

  const contactItems:IListItem[] = [
    {name:'+7 555 555-55-55', link:'#'},
    {subData:
      [
        {icon:<Telegram/>, link:'#'},
        {icon:<Phone/>, link:'#'},
        {icon:<WhatsUp/>, link:'#'},
      ]},
    {name:'Москва, Путевой проезд 3с1, к 902', link:'#'},
  ]

  const footerListItems:IList[] = [
    {title:"О компании", data:companyItems, spacing:10},
    {title:"Меню" ,data:menuItems, spacing:10},
    {data:advantagesItems, spacing:10},
    {title:"Контакты", data:contactItems, spacing:20},
  ]
  
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-desctop-content">
          {footerListItems.map((list, i)=><List key={list.title ? list.title + '_footer_list' : i + '_footer_list'} {...list} />)}
        </div>
        <div className="footer-mobile-content">
          <List title='О компании' data={companyItems} spacing={10} />
          <div className="footer-mobile-content-wrapper">
            <List title='Меню' data={menuItems} spacing={10} />
            <List data={advantagesItems} spacing={10} />
          </div>
          <List title='Контакты' data={contactItems} spacing={20} />
        </div>
      </div>
      <div className="footer-copyright">
        <p className='footer-copyright__title'>©WELBEX 2022. Все права защищены.</p>
        <a className='footer-copyright__subtitle' href='#'>Политика конфиденциальности</a>
      </div>
    </footer>
  )
}
