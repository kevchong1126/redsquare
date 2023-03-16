import React from 'react'
import style from './ListItem.module.css'

const ListItem = React.forwardRef( ({content}, ref) => {

  return (
    <li className={`${style.listItem} ${style.slide}`} ref={ref}>
        <p className={style.word}>
            {content}
        </p>
    </li>
  )
})

export default ListItem