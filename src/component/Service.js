import React from 'react';
import MobileFrndly from "../images/mobile-frndly.png";
import Animation from "../images/animation.svg";
import CodeClean from "../images/code-clean.png";
import Integration from "../images/integration.png";
import Development from "../images/development.png";
import Management from "../images/management.png";
import Heart from "../images/heart.png";
import Teeth from "../images/dantu.png";
import Developer from "../images/developer.png";
import Namaste from "../images/namaste.png";

const Service = () => {
  return (
    <div className="service-container">

      <h6>
        <span className="a">S</span>
        <span className="a">E</span>
        <span className="a">R</span>
        <span className="a">V</span>
        <span className="a">I</span>
        <span className="a">C</span>
        <span className="a">E</span>
        <span className="a">S</span>
      </h6>

      <h3>
        <span className="a">W</span>
        <span className="a">H</span>
        <span className="a">A</span>
        <span className="a">T</span>
        <span> </span>
        <span className="a">I</span>
        <span> </span>
        <span className="a">D</span>
        <span className="a">O</span>
      </h3>

      <div className="services-provide">
        <div className="sr-row-1">
          <div className="sr-card-1">
            <img src={Development} className="a" alt="Development"/>
            <h2>Development</h2>
          </div>
          <div className="sr-card-2">
            <img src={Integration} alt="API Integration" className="a"/>
            <h2>API's Integration</h2>
          </div>
          <div className="sr-card-3">
            <img src={MobileFrndly} alt="Responsive Design" className="a"/>
            <h2>Mobile Friendly Design</h2>
          </div>
        </div>
        <div className="sr-row-2">
          <div className="sr-card-4">
            <img src={Management} alt="Management" className="a"/>
            <h2>Hosting</h2>
          </div>
          <div className="sr-card-5">
            <img src={CodeClean} alt="Code clean" className="a"/>
            <h2>Code Redundant</h2>
          </div>
          <div className="sr-card-6">
            <img src={Animation} alt="animation" className="a"/>
            <h2>Animations</h2>
          </div>
        </div>
      </div>

      <h1>
        <span className="a">M</span>
        <span className="a">y</span>
        <span> </span>
        <span className="a">V</span>
        <span className="a">a</span>
        <span className="a">l</span>
        <span className="a">u</span>
        <span className="a">e</span>
        <span className="a">s</span>
        <span> </span>
      </h1>
      <div className="sr-row-3">
        <div className="sr-model-1">
          <div className="sr-model-inner-1">
            <img src={Heart} alt="Passion is Everthing" className="emoji"/>
            <span>Passion is everthing.</span>
          </div>
          <p>If you do not enjoy what you are doing move.You are not a tree. Channel your
            energy into something you believe in . I am fortunate to be inspired and
            surrounded by motivated people who enjoy what they do. We only have so much time
            on this earth to leave - so why waste it?</p>
        </div>
        <div className="sr-model-2">
        <div className="sr-model-inner-1">
          <img src={Teeth} alt="Always be learning" className="emoji"/>
          <span>Always be learning.</span>
          </div>
          <p>Humans are constant work in progress that need to receive feedback in order to grow. 
            I am always looking 8 ways to challenge and improve myself, which is why in my spare time 
            I like to participate in open-source, read blogs, learning new technologies, becoming proficient 
            and dabble in new projects.</p>
        </div>
        <div className="sr-model-3">
        <div className="sr-model-inner-1">
          <img src={Developer} alt="Embrance your creativity" className="emoji"/>
          <span>Embrance your creativity.</span>
          </div>
          <p>Everyone needs to creative outlet of some short - else, we had go insane! 
              When I am not developing, I am grinding on technologies, 
              taking hands on experience by making personal learning purpose projects.</p>
        </div>
        <div className="sr-model-4">
        <div className="sr-model-inner-1">
          <img src={Namaste} alt="Stay humble" className="emoji"/>
          <span>Stay humble.</span>
          </div>
          <p>It does not matter whether you are the president, manager,
               homeless or average kid on the treat others with respect as you would 
               yourself because ultimate we are the all human sharing the same wants and needswants
                and needs and facing our own battles. Stay true to yourself and stay true to others.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
