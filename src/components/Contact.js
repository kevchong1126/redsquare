import React, {useEffect, useRef, useContext} from 'react'
import style from './Contact.module.css'
import { Context } from '../context/ContextProvider'
import Tilt from 'react-tilt'

import insta from '../img/instagram.svg'
import twitter from '../img/twitter.svg'
import linked from '../img/linked.svg'

const callback = (entries) => {

    entries.forEach((entry, idx) => {
        
        if (entry.isIntersecting){
            if (!entry.target.className.includes(style.slideUP)){
                entry.target.className += ` ${style.slideUp}`;
            }
        }else{
            if (entry.target.className.includes(style.slideUp)){
                const classes = entry.target.className.split(' ');
                classes.pop();

                entry.target.className = classes.join(' ');
            }
        }
    });

}

const options = {
    rootMargin: '0px',
    threshold: 0.3
}

const observer = new IntersectionObserver(callback, options);

const Contact = () => {
    const animateRef = useRef();
    const {setIsBlurry} = useContext(Context);
    useEffect( () => {observer.observe(animateRef.current)}, []);

  return (
    <div className={`${style.container}`} ref={animateRef}>
        <div className={style.content}>
            <div className={style.emailContainer} > 
                <a href='asd' className={style.emailLink} onMouseEnter={() => setIsBlurry(true)} onMouseLeave={() => setIsBlurry(false)}>
                    <Tilt options={{max : 15}}>
                        <p className={style.talk}>Let's talk.</p>
                        <p className={style.email}>hi@rsq.com</p>
                    </Tilt> 
                </a>
            </div>

            <div className={style.col}>
                <ul className={style.row}>
                    <li className={style.listItem}><a className={style.socialLink} href='asd'> Nugs </a></li>
                    <li className={style.listItem}><a className={style.socialLink} href='asd'><img className={style.icon} src={twitter} alt='img'></img></a></li>
                    <li className={style.listItem}><a className={style.socialLink} href='asd'><img className={style.icon} src={insta} alt='img'></img></a></li>
                    <li className={style.listItem}><a className={style.socialLink} href='asd'><img className={style.icon} src={linked} alt='img'></img></a></li>
                </ul>
                <ul className={style.row}>
                    <li className={style.listItem}><p>Mobile, AL</p></li>
                    <li className={style.listItem}><p>Chicago, IL</p></li>
                    <li className={style.listItem}><p>Tulsa, OK</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact