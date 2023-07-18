import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="navbar">
            <Link className="menu-btn" to="/" onClick={props.closeMenuProps}>Home</Link> 
            <Link className="menu-btn"  to="/about" onClick={props.closeMenuProps}> About </Link>
            <Link className="menu-btn" to="/services" onClick={props.closeMenuProps}>Service</Link>
            <Link className="menu-btn" to="/projects" onClick={props.closeMenuProps}>Projects</Link>
            <Link className="menu-btn" to="/contact" onClick={props.closeMenuProps}>Contact</Link>
        </div>
)}
export default Menu







// Toggle in react 
// const [show, setShow] = useState();

//   const ToggleData = () => {
//     setShow(!show);
//   };

//   return (
//     <div className="App">
//       <button onClick={ToggleData}> {!show ? "Show" : 'Dont"t show'} </button>
//       {show ? <h1> Show </h1> : <h1>Don't Show </h1>}
//     </div>



// function MyComponent (props) {
//     const [isActive, setActive] = useState(false);
  
//     const toggleClass = () => {
//       setActive(!isActive);
//     };
  
//     return (
//       <div 
//         className={isActive ? 'your_className': null} 
//         onClick={toggleClass} 
//       >
//         <p>my text</p>
//       </div>
//      );
//   }