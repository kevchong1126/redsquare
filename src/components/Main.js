import React from 'react'
import ImgCollage from './ImgCollage'
import style from './Main.module.css'

const Main = () => {
  return (
    <div className={style.mainContainer}>
        <div className={style.mainContent}>
            <h1 className={style.title}>
                The agency for what comes next.
            </h1>
        </div>

        <ImgCollage />
        
    </div>
  )
}

export default Main
