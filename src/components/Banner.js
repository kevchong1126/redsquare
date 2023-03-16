import React from 'react'
import style from './Banner.module.css'

import BannerImg from '../img/banner.avif'

const Banner = () => {

  return (
    <div className={style.bannerContainer}>
        
        <a className={style.container} href='work'>
            <img className={style.img} src={BannerImg} alt='banner' ></img>
            <div className={style.textContainer}>
                <div className={style.left}>
                    <p className={style.leftText}>All Projects</p>
                </div>

                <div className={style.right}>
                    <p className={style.text}>Work</p>
                    <span className={`material-symbols-outlined ${style.arrow}`}>arrow_forward_ios</span>
                </div>  
            </div>
        </a>
    </div>
  )
}

export default Banner