import React from 'react'
import { IHeaderItem } from '../../interface/IHeaderItem'
import {ReactComponent as Logo} from '../../images/logo.svg'
import {ReactComponent as Telegram} from '../../images/telegram.svg'
import {ReactComponent as Phone} from '../../images/phone.svg'
import {ReactComponent as WhatsUp} from '../../images/whatsup.svg'
import './header.scss'

export const Header = () => {

  const links:IHeaderItem[] = [
    {name:'Услуги', link:'#'},
    {name:'Виджеты', link:'#'},
    {name:'Интеграции', link:'#'},
    {name:'Кейсы', link:'#'},
    {name:'Сертификаты', link:'#'},
  ]

  const socials:IHeaderItem[] = [
    {icon:<Telegram/>, link:'#'},
    {icon:<Phone/>, link:'#'},
    {icon:<WhatsUp/>, link:'#'},
  ]

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-logo'>
          <Logo/>
          <p className='header__subtext'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
        <div className='header-links'>
          {links.map(item=><a key={item.name + '_header_link'} className='header__item' href={item.link}>{item.name}</a>)}
        </div>
      </div>
      <div className='header-contacts'>
        <a className='header__item' href="#">+7 555 555-55-55</a>
        <div className='header-socials'>
          {socials.map((item, i)=><a key={i + '_header_link_social'} href={item.link}>{item.icon}</a>)}
        </div>
      </div>
    </div>
  )
}
