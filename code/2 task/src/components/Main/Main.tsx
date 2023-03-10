import React from 'react'
import { IMainSubItem } from '../MainSideItem/interface'
import { Button } from '../Button/Button'
import './main.scss'
import { MainSideItem } from '../MainSideItem/MainSideItem'
import { BgBall } from '../BgBall/BgBall'
import { BgSmallBall } from '../BgSmallBall/BgSmallBall'

export const Main = () => {
  const mainSideItems:IMainSubItem[] = [
    {title:'Виджеты', description:'30 готовых решений'},
    {title:'Dashboard', description:'с показателями вашего бизнеса'},
    {title:'Skype Аудит', description:'отдела продаж и CRM системы'},
    {title:'35 дней', description:'использования CRM'},
  ]

  return (
    <>
      <main className='main'>
        <div className="main-content">
          <h1 className='main__title'>
            Зарабатывайте больше <br />
            <span className='main__title--orange'>с WELBEX</span>
          </h1>
          <p className='main__subtitle'>Развиваем и контролируем <br /> продажи за вас</p>
        </div>
        <div className="main-side">
          <p className='main-side__title'>Вместе с <span className='main-side__title--red'>бесплатной консультацией</span> мы дарим:</p>
          <div className="main-side-content">
            {mainSideItems.map(item=><MainSideItem key={item.title + '_main_side'} {...item} />)}
          </div>
          <div className="main__btn">
            <Button>
              Получить консультацию
            </Button>
          </div>
        </div>
      </main>
      <BgSmallBall variant='purple'/>
      <BgSmallBall variant='purple_small'/>
      <BgSmallBall variant='red_big'/>
      <BgSmallBall variant='red_middle'/>
      <BgSmallBall variant='red_small'/>
      <BgBall height={310} variant='red'/>
      <BgBall height={260} variant='purple'/>
    </>
  )
}