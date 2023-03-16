import React from 'react'
import style from './SelectClients.module.css'
import Clients from './Clients'

const list1 = ['Nescafé','New York Pride','Patreon','Rivers Casino','Snickers','Southern Comfort','The University of Alabama','Twix','Wind Creek Hospitality'];
const list2 = ['Cherokee Casinos','Flipboard','Foxwoods','Glanbia Nutritionals','Google','Hard Rock','Hibbett Sports','Hilton Worldwide','Jack Daniels'];    

const SelectClients = () => {

return (
    <div className={`${style.container}`}>
        <div className={`${style.content}`}>
            <h3 className={`${style.title}`}> Select Clients </h3>
            <Clients clients={list2} />
            <Clients clients={list1} />
        </div>
    </div>
  )
}

export default SelectClients