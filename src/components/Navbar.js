import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import style from './Navbar.module.css'

const Navbar = () => {
    const {setIsBlurry} = useContext(Context);

    return(
        <div className={style.container}>
            <div className={style.navbarContent}>
                <a className={style.logo} href="home"> </a>
                <a className={style.link} href="work" onMouseEnter={() => setIsBlurry(true)} onMouseLeave={() => setIsBlurry(false)}>
                    Work 
                    <span className={`material-symbols-outlined ${style.arrow}`}>arrow_forward_ios</span>
                </a>
            </div>
        </div>
    )
    
}

export default Navbar
