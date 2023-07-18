import React from 'react';
import Image from "../images/zoya.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div className="image-container">
        <div className="inner-shadow">
          <img src={Image} alt="..." className="a"/>
        </div>
        <div className="short-intro">
          <h3>
            <span className="a">H</span>
            <span className="a">i</span>
            <span className="a">,</span>
          </h3>
          <h1>
            <span className="a">I</span>
            <span className="a">'</span>
            <span className="a">m</span>
            <span> </span>
            <span className="a">N</span>
            <span className="a">a</span>
            <span className="a">d</span>
            <span className="a">e</span>
            <span className="a">e</span>
            <span className="a">m</span>
            <span> </span>
            <span className="a">K</span>
            <span className="a">h</span>
            <span className="a">a</span>
            <span className="a">n</span>
            <span className="a">.</span>
          </h1>
          <h2>
            <span className="a">F</span>
            <span className="a">u</span>
            <span className="a">l</span>
            <span className="a">l</span>
            <span> </span>
            <span className="a">S</span>
            <span className="a">t</span>
            <span className="a">a</span>
            <span className="a">c</span>
            <span className="a">k</span>
            <span> </span>
            <span className="a">D</span>
            <span className="a">e</span>
            <span className="a">v</span>
            <span className="a">e</span>
            <span className="a">l</span>
            <span className="a">o</span>
            <span className="a">p</span>
            <span className="a">e</span>
            <span className="a">r</span>
          </h2>
          <Link to="/about" className="btn-1">
            <div>
            <button>
              More About Me
            </button>
            </div>
          </Link>
        </div>
      </div>
  )
}

export default Home
