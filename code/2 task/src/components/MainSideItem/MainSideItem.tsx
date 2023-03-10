import React, {FC} from 'react'
import { IMainSubItem } from './interface'
import './mainSubItem.scss'

export const MainSideItem:FC<IMainSubItem> = (props) => {
  const {title, description} = props

  return (
    <div className='sub-item'>
      <div className="sub-item-title">
        <span className='sub-item__icon'></span>
        <p className='sub-item__title'>{title}</p>
      </div>
      <p className='sub-item__subtitle'>{description}</p>
    </div>
  )
}
