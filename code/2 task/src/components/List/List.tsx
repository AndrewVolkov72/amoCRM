import React, {FC} from 'react'
import { IList } from './interface'
import './list.scss'
export const List:FC<IList> = (props) => {
  const {
    data,
    title,
    align,
    spacing,
  } = props

  return (
    <div className='list' style={{textAlign:align}}>
      <p className='list__title'>{title && title}</p>
      <div className="list-content">
        {data.map((item, i)=>
          <>
            {!item['subData'] ?
              <a
                key={i + '_list_link'}
                className='list-content__link'
                style={{marginBottom:i === data.length -1 ? 0 : spacing}}
                href={item['link']}
              >
                {item['name']}
                {item['icon']}
              </a>
              : <div
                  className="list-content-sub"
                  style={{justifyContent:align, marginBottom:i === data.length -1 ? 0 : spacing}}
                >
                  {item['subData']?.map((item, i)=>
                    <a key={item.link + i + '_list_link_sub'} href={item.link}>{item.icon}</a>)
                  }
                </div>
              }
          </>)
        }
      </div>
    </div>
  )
}
