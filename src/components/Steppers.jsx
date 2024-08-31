
import React from 'react'
import "../styles/steppers.css"
import imgContact from "../img/contacto.png"
import idea from "../img/idea.png"
import fecha from "../img/fecha.png"
const Steppers = () => {
  return (
    <div>
       <div className='steppersCont'>
       <img src={imgContact}></img>
       <img src={idea}></img>
       <img src={fecha}></img>
       </div>
    </div>
  )
}

export default Steppers