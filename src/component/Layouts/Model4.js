import React from 'react'
import covid1 from "../../images/projects/covid-1.png"
import covid2 from "../../images/projects/covid-2.png"
import covid3 from "../../images/projects/covid-3.png"
import covid4 from "../../images/projects/covid-4.png"
import covid5 from "../../images/projects/covid-5.png"
import covid6 from "../../images/projects/covid-6.jpg"

const Model4 = (props) => {
    return (
        <div className='model-container' onClick={props.model}>
            <div className="bg-light"  />
            <div className="model-content">
                <img src={covid1} alt="images-1"/>
                <img src={covid2} alt="images-"/>
                <img src={covid3} alt="images-1"/>
                <img src={covid4} alt="images-1"/>
                <img src={covid5} alt="images-1"/>
                <img src={covid6} alt="images-1" className="mobile-img"/>
            </div>
        </div>
    )
}

export default Model4
