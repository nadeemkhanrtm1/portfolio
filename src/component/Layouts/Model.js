import React from 'react'
import project1 from "../../images/projects/idoctoc-1.png"
import project2 from "../../images/projects/idoctoc-2.png"
import project3 from "../../images/projects/idoctoc-3.png"
import project4 from "../../images/projects/idoctoc-4.png"
import project5 from "../../images/projects/idoctoc-5.png"
import project6 from "../../images/projects/idoctoc-6.png"
import project7 from "../../images/projects/idoctoc-7.png"
import project8 from "../../images/projects/idoctoc-8.png"
import project9 from "../../images/projects/idoctoc-9.png"

const Model = (props) => {
    return (
        <div className='model-container' onClick={props.model}>
            <div className="bg-light"  />
            <div className="model-content">
                <img src={project1} alt="images-1"/>
                <img src={project2} alt="images-1"/>
                <img src={project3} alt="images-1"/>
                <img src={project4} alt="images-1"/>
                <img src={project5} alt="images-1"/>
                <img src={project6} alt="images-1"/>
                <img src={project7} alt="images-1"/>
                <img src={project8} alt="images-1"/>
                <img src={project9} alt="images-1"/>
                
            </div>
        </div>
    )
}

export default Model
