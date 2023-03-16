import React, { useState, useEffect } from 'react'
import style from './ImgCollage.module.css'

import img1 from '../img/img1.avif'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function ImgCollage() {
  const [currIdx, setCurrIdx] = useState(0);

  useEffect( () => {

    const id = setInterval( () => {
        if (currIdx === images.length-1){
          setCurrIdx(0);
        }else{
          setCurrIdx(currIdx+1)
        }
      }, 250)

    return () => clearInterval(id);

  }, [currIdx])

  return (
    <div className={style.imgContainer}> 
        <a className={style.imgContent} href='/work'>
          <img className={style.img} src={images[currIdx]} alt='img'></img>
        </a>
    </div>
  )
}

export default ImgCollage