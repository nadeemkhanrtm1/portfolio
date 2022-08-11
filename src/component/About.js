import React from 'react';
import Itsme from '../images/Itsme.jpg'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaGithub
} from "react-icons/fa"
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Education from "./Layouts/Education";
import Skills from "./Layouts/Skills";
import Experience from "./Layouts/Experience";
import Resume from "../Resume/Resume.pdf";

const About = () => {
  return (
    <div className="about-page">
      <h6>
        <span className="a">M</span>
        <span className="a">a</span>
        <span className="a">i</span>
        <span className="a">n</span>
        <span> </span>
        <span className="a">I</span>
        <span className="a">n</span>
        <span className="a">f</span>
        <span className="a">o</span>
      </h6>
      <h3>
        <span className="a">A</span>
        <span className="a">b</span>
        <span className="a">o</span>
        <span className="a">u</span>
        <span className="a">t</span>
        <span> </span>
        <span className="a">M</span>
        <span className="a">e</span>
      </h3>
      <div className="about-flex">
        <div className="image-container-1">
          <div>
            <img src={Itsme} alt="Nadeem Khan"/>
          </div>
          <h1>
            <a href="https://www.linkedin.com/in/zouya-kausar-zoya-268165190/" target="_zoya" className="a"><FaLinkedin/></a>
            <a href="https://github.com/ZoyaMew" target="_zoya" className="a"><FaGithub/></a>
            <a href="https://stackoverflow.com/users/11732103/nadeem-khan" target="_zoya" className="a"><FaStackOverflow/></a>
            <a href="https://twitter.com/MewZoya" target="_zoya" className="a"><FaTwitter/></a>
            <a href="https://www.instagram.com/dazzling.zoya/" target="_zoya" className="a"><FaInstagram/></a>
            <a href="https://www.facebook.com/nadeekhanrtm" target="_zoya" className="a"><FaFacebookF/></a>
          </h1>
        </div>
        <div className="introduction">
          <p>
            Hi here, I am Nadeem Khan born and raised in Ratlam. I am currently in final
            year of Engineering and student of Information Technology. I am Front-End
            Developer by passion. I worked in many projects. I love to code in systematic
            manner like professionals. My working style I break big things into small
            peaces. I am also learning, Back-End Development and looking forward to be Full
            Stack Web Developer.Learning is the only path which makes your profile updated
            for that I am keen to grap new technologies and added them into my list of
            skills.I am always trying to become perfect for that grind my self. Apart from
            that, I likes teaching, photography, gym, soulful music and love to spend time
            with my family.
          </p>
          <div className='btn-div'>
            <a href={Resume} download><button>Download File</button></a>
            <Link to="/contact"><button>Hire Me</button></Link>
          </div>

        </div>
      </div>
      <div className="details-aboutme">
        <NavLink exact to="/about" className="btn-2" activeClassName='active-link'>Skills</NavLink>
        <NavLink exact to="/about/experience" className="btn-3" activeClassName='active-link'>Experience</NavLink>
        <NavLink exact to="/about/education" className="btn-4" activeClassName='active-link'>Education</NavLink>
      </div>
    
      <Routes>
        <Route exact path="/" element={<Skills/>}/>
        <Route exact path="/about/experience" element={<Experience/>}/>
        <Route exact path="/about/education" element={<Education/>}/>
      </Routes>
      
    </div>
  )
}

export default About
