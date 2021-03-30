import React from 'react'
import cares1 from "../../images/projects/cares-1.png"
import cares2 from "../../images/projects/cares-2.png"
import cares3 from "../../images/projects/cares-3.png"
import cares4 from "../../images/projects/cares-4.png"
import cares5 from "../../images/projects/cares-5.png"
import cares6 from "../../images/projects/cares-6.png"
import cares7 from "../../images/projects/cares-7.png"
import cares8 from "../../images/projects/cares-8.png"

const Model3 = (props) => {
    return (
        <div className='model-container' onClick={props.model}>
      <div className="bg-light"/>
      <div className="model-content">
        <img src={cares1} alt="images-1"/>
        <img src={cares2} alt="images-1"/>
        <img src={cares3} alt="images-1"/>
        <img src={cares4} alt="images-1"/>
        <img src={cares5} alt="images-1"/>
        <img src={cares6} alt="images-1"/>
        <img src={cares7} alt="images-1"/>
        <img src={cares8} alt="images-1"/>
      </div>
    </div>
    )
}

export default Model3
