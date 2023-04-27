import { useState } from 'react'
import './Collapse.css'
import vectorUp from "../../assets/vector-up.png"
import vectorDown from "../../assets/vector-down.png"


function Collapse({ title, text }) {
  const [collapseIsOpen, setCollapse] = useState(false)

  return (
    collapseIsOpen ? (
        <div className='collapse'>
            <div className='collapse-title'onClick={() => setCollapse(false)}>
                <h3 >{title}</h3>
                <img src={vectorUp}  alt = "up" />
            </div>
            <p className='collapse-text'>{text}</p>

        </div>
    ):(

        <div className='collapse'>
            <div className='collapse-title'onClick={() => setCollapse(true)}>
                <h3 >{title}</h3>
                <img src={vectorDown}  alt = "down" />
            </div>
        </div>

    )

  )}

      
    


export default Collapse
