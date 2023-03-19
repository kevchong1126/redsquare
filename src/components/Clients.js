import React, {useEffect, useRef} from 'react'
import style from './Clients.module.css'
import ListItem from './ListItem'

const callback = (entries) => {

    entries.forEach( (entry, idx) => {
        if (entry.isIntersecting){
            if (!entry.target.className.includes('ListItem_slide__0btjc')){
                entry.target.className += ' ListItem_slide__0btjc';
                
            }
        }else{
            entry.target.className = '';
        }
    });

}

const options = {
    rootMargin: '20px 0px 0px 0px',
}

const observer = new IntersectionObserver(callback, options);

const Clients = ({clients}) => {
    const animationRefs = useRef([]);

    useEffect( () => {

        animationRefs.current && animationRefs.current.forEach(el => {
            observer.observe(el);
        })

    }, []);

  return (
    <ul className={style.list}>
        {
            clients.map( (el, idx) => {
                return (
                    <ListItem key={idx} content={el} ref={el => animationRefs.current.push(el)} />
                )
            })
        }
        
    </ul>

  )
}

export default Clients