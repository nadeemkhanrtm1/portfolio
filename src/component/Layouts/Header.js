import React, {useState} from 'react';
import {Squash as Hamburger} from 'hamburger-react';
import Menu from './Menu';

const Header = () => {
  const [render,
    setRender] = useState(false);
  return (
    <header>
      <nav>
        <h1>
          <span className="emoji">N</span>
          <span className="emoji">a</span>
          <span className="emoji">d</span>
          <span className="emoji">e</span>
          <span className="emoji">e</span>
          <span className="emoji">m</span>
          <span className="emoji">.</span>
        </h1>
        <div>
          <Hamburger
            size={30}
            distance="lg"
            duration="0.5"
            rounded
            toggled={render}
            toggle={()=>setRender(!render)}
          />
        </div>
      </nav>
      {render ? <Menu render={render} setRender={setRender}/> : null}
    </header>
  )
}

export default Header
