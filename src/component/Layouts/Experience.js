import React from 'react'
import {IoIosBriefcase} from "react-icons/io"

const Experience = () => {
  return (
    <React.Fragment>
      <div className="experience-page-1">
        <div className="ex-flexbox-11">
          <IoIosBriefcase className="icon-1"/>
          <div className="card-1">
            <i>July 2020 - Present</i>
            <h1>Front-End Developer</h1>
            <h4>Inborn,USA</h4>
            <p>
              My responsibilities are creating User Interface, code clean, State Management, Reusable Components.
              I have used HTML5, CSS3, Bootstrap and React JS (react-router, react-bootstrap, react-redux) technologies
              to make Idoctoc Website.
            </p>
          </div>
        </div>
        <div className="ex-flexbox-22">
          <div></div>
        </div>

      </div>
      <div className="experience-page-2">
        <div className="ex-flexbox-21">
          <div></div>
        </div>
        <div className="ex-flexbox-22">
          <div className="card-2">
            <i>Aug 2020 - Present</i>
            <h4>CaerusInfoTech, Jaipur-Rajasthan</h4>
            <p>
              I have worked as part-time Full Stack Developer.
              My Responsibilities are code clean, mobile friendly, making resuable component, hosting,
              integration with Google Firebase for Back-End.
              I used HTML5, CSS3, Bootstrap(v5), React JS, firebase.Apart from that I always keep support
              to explore the company with my best talent.
            </p>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Experience
