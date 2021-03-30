import React, { useState } from 'react';
import project1 from "../images/projects/idoctoc-1.png";
import project2 from "../images/projects/firebase-1.png";
import project3 from "../images/projects/cares-1.png";
import project4 from "../images/projects/covid-1.png";
import {Link} from "react-router-dom";
import Model from "./Layouts/Model";
import Model2 from "./Layouts/Model2";
import Model3 from "./Layouts/Model3";
import Model4 from "./Layouts/Model4";


const Projects = () => {
    const [model,setModel] = useState(false);
    const [model2,setModel2] = useState(false);
    const [model3,setModel3] = useState(false);
    const [model4,setModel4] = useState(false);
    const handleClick = () => {
        setModel(true);
    }
    const handleClick2 = () => {
        setModel2(true);
    }
    const handleClick3 = () => {
        setModel3(true);
    }
    const handleClick4 = () => {
        setModel4(true);
    }
    const handleModel = () => {
        setModel(false);
    }
    const handleModel2 = () => {
        setModel2(false);
    }
    const handleModel3 = () => {
        setModel3(false);
    }
    const handleModel4 = () => {
        setModel4(false);
    }

  return (
    <div className="project-container">
      <h3>
        <span className="a">P</span>
        <span className="a">R</span>
        <span className="a">O</span>
        <span className="a">J</span>
        <span className="a">E</span>
        <span className="a">C</span>
        <span className="a">T</span>
        <span className="a">S</span>
      </h3>
      <h6>
        <span className="a">L</span>
        <span className="a">A</span>
        <span className="a">T</span>
        <span className="a">E</span>
        <span className="a">S</span>
        <span className="a">T</span>
        <span></span>
        <span className="a">W</span>
        <span className="a">O</span>
        <span className="a">R</span>
        <span className="a">K</span>
      </h6>
      <div className="pr-row-1">
        <div className="pr-card-1">
          <img src={project1} alt="project 1"/>
          <figcaption>
            It is a Web App about online hospital. Appointment, Querries and all stuff which
            has been done offline now-a-days.It is better way to get touch with doctors
            maintaining social distance and problem can be solved easily. <Link className='pr-link' onClick={handleClick}>View More...</Link>
          </figcaption>
          {
              model ? <Model model={handleModel}/> : null
          }
        </div>
        <div className="pr-card-1">
          <img src={project2} alt="project 1"/>
          <figcaption>
              It is an Vlog Post Web App which uses React, Redux, Firebase, Tailwind CSS to build.
              It has functionality like private routing, middleware redux-thunk, authentication etc.
              <Link className='pr-link' onClick={handleClick2}>View More...</Link></figcaption>
          {
              model2 ? <Model2 model={handleModel2}/> : null
          }
        </div>
        <div className="pr-card-1">
          <img src={project3} alt="project 1"/>
          <figcaption>
            I have developed only some pages of these websites. My resposibilities are code clean, hosting,
            making changes in component when it looks weared in mobile phone.
          <Link className='pr-link' onClick={handleClick3}>View More...</Link>
          </figcaption>
          {
              model3 ? <Model3 model={handleModel3}/> : null
          }
        </div>
        <div className="pr-card-1">
          <img src={project4} alt="project 1"/>
          <figcaption>
            I have developed only some pages of these websites. My resposibilities are code clean, hosting,
            making changes in component when it looks weared in mobile phone.
          <Link className='pr-link' onClick={handleClick4}>View More...</Link>
          </figcaption>
          {
              model4 ? <Model4 model={handleModel4}/> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
