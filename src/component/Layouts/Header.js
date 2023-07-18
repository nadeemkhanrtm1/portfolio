import React, {useState} from 'react';
import {Divide as Hamburger} from 'hamburger-react';
import Menu from './Menu';
import { Link } from 'react-router-dom'


const Header = () => {
  const [render,setRender] = useState(true);

  const ontoggle = () => {
    // setRender(!render)
    if(render){
      setRender(false)
      document.body.style.overflow = "hidden";
      }else{
      setRender(true)
      document.body.style.overflow = "initial"
      }
  }
  return (
    <header>
      <nav>
        <h1>
        <Link to="/" className="">   
          <span className="emoji">N</span>
          <span className="emoji">a</span>
          <span className="emoji">d</span>
          <span className="emoji">e</span>
          <span className="emoji">e</span>
          <span className="emoji">m</span>
          <span className="emoji">.</span>  
        </Link>
        </h1>
        <div>
          <Hamburger
            size={30}
            distance="lg"
            duration="0.9"
            rounded
            toggled={!render}
            toggle ={ ontoggle }/>
        

        </div>
      </nav>
      {!render ? <Menu closeMenuProps={ontoggle}/> : null}
    </header>
  )
}

export default Header

