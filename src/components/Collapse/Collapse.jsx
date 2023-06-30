import { useState } from 'react'
import './Collapse.scss'
import vectorUp from '../../assets/vector-up.png'


function Collapse({ title, text }) {
  const [collapseIsOpen, setCollapse] = useState(false)

  const handleClick = () => { collapseIsOpen ? setCollapse(false) : setCollapse(true)}

  return (
 

    <div className="collapse">
      <div className="collapse-title" onClick={handleClick}>
        <h3>{title}</h3>
        <img src={vectorUp} alt="up" className={`${!collapseIsOpen?("vector-up"):("vector-down")}`} />
      </div>
      <p className={`collapse-text ${!collapseIsOpen? ("collapse-text-up") : ("collapse-text-down")}`}>{text}</p>
    </div>
  )
}

export default Collapse
