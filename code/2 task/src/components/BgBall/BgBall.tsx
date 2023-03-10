import React, {FC} from 'react'
import './bg_ball.scss'
import { IBgBall } from './interface'

export const BgBall:FC<IBgBall> = (props) => {
  const {height, variant} = props

  return (
    <div
      className={`bg ${variant}`}
      style={{height, width:height}}
    />
  )
}