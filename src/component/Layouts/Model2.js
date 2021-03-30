import React from 'react'
import firebase1 from "../../images/projects/firebase-1.png"
import firebase2 from "../../images/projects/firebase-2.png"
import firebase4 from "../../images/projects/firebase-4.png"
import firebase5 from "../../images/projects/firebase-5.png"

const Model2 = (props) => {
  return (
    <div className='model-container' onClick={props.model}>
      <div className="bg-light"/>
      <div className="model-content">
        <img src={firebase1} alt="images-1"/>
        <img src={firebase2} alt="images-2"/>
        <img src={firebase4} alt="images-4"/>
        <img src={firebase5} alt="images-5"/>
      </div>
    </div>
  )
}

export default Model2
