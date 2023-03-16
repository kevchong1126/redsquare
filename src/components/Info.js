import React, { useEffect, useRef,} from 'react'
import style from './Info.module.css'

const callback = (entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting){
            if (!entry.target.className.includes('Info_fadeUp__A8p0P')){
                entry.target.className += ' Info_fadeUp__A8p0P';
            }
        }
    });
};

const options = {
    rootMargin: '20px 0px 0px 0px',
}

const observer = new IntersectionObserver(callback, options);

const Info = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useEffect( () => {
        const refs = [ref1, ref2]
        
        refs.forEach( el => {
            observer.observe(el.current);
        })

    }, []);

    return (
        <div className={style.container}>
            <div className={style.infoContent}>
                <div className={`${style.boldText}`} ref={ref1}>
                    <p  className={`${style.text}`}>
                        We deal in ideas, design and media that are category defying. When the world Millis, you’ve got to Vanilli.
                    </p>
                </div>
                <div className={`${style.normalText}`} ref={ref2}>
                    <p  className={`${style.text}`}>
                    Red Square believes in rigorous development of brand strategy and whip-smart execution. We make all sorts of things. Things that move markets, compel audiences and sell product. We help great brands create what comes next.
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Info