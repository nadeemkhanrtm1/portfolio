import React, {useState, useEffect} from 'react'
import { Circle} from 'rc-progress';

const Skills = () => {
  const [percentageHTML,
    setPercentageHTML] = useState(0);

  const [percentageCSS,
    setPercentageCSS] = useState(0);

  const [percentageJavaScript,
    setPercentageJavaScript] = useState(0);

  const [percentageReact,
    setPercentageReact] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPercentageHTML(80);
      setPercentageCSS(60);
      setPercentageJavaScript(70);
      setPercentageReact(65);
      clearInterval();
    }, 1000)
  }, [percentageHTML])

  return (
    <div className="skills-section">
      <div className="progress-bar-flex">
        <div>
          <h5>
              <span className="a">H</span>
              <span className="a">T</span>
              <span className="a">M</span>
              <span className="a">L</span>
          </h5>
          <h6><span className="a">{percentageHTML}%</span></h6>
          <Circle
            percent={percentageHTML}
            strokeWidth="8"
            strokeColor="#fb839e"
            trailWidth="3"
            style={{
            width: '150px',
            height: '150px',
            transition:'5s'
          }}/>
        </div>
        <div>
          <h5>
          <span className="a">C</span>
          <span className="a">S</span>
          <span className="a">S</span>
          </h5>
          <h6><span className="a">{percentageCSS}%</span></h6>
          <Circle
            percent={percentageCSS}
            strokeWidth="8"
            strokeColor="#fb839e"
            style={{
            width: '150px',
            height: '150px',
            transition:'5s'
          }}/></div>
        <div>
          <h5>
              <span className="a">J</span>
              <span className="a">a</span>
              <span className="a">v</span>
              <span className="a">a</span>
              <span className="a">S</span>
              <span className="a">c</span>
              <span className="a">r</span>
              <span className="a">i</span>
              <span className="a">p</span>
              <span className="a">t</span>
          </h5>
          <h6><span className="a">{percentageJavaScript}%</span></h6>
          <Circle
            percent={percentageJavaScript}
            strokeWidth="8"
            strokeColor="#fb839e"
            style={{
            width: '150px',
            height: '150px',
            transition:'5s'
          }}/></div>
        <div>
          <h5>
          <span className="a">R</span>
          <span className="a">e</span>
          <span className="a">a</span>
          <span className="a">c</span>
          <span className="a">t</span>
          <span> </span>
          <span className="a">J</span>
          <span className="a">S</span>
          </h5>
          <h6><span className="a">{percentageReact}%</span></h6>
          <Circle
            percent={percentageReact}
            strokeWidth="8"
            strokeColor="#fb839e"
            style={{
            width: '150px',
            height: '150px',
            transition:'5s'
          }}/></div>
      </div>
    </div>
  )
}

export default Skills
