import React, {FC} from 'react'
import './bg_small_ball.scss'
import { IBgSmallBall } from './interface'


export const BgSmallBall:FC<IBgSmallBall> = (props) => {
  const {variant} = props
  
  return (
    <div
      className={`bg_small_ball ${variant}`}
    />
  )
}
