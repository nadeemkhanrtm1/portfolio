import './App.scss';
import React, { Component }  from 'react';
import Home from "./component/Home";
import About from "./component/About";
import Header from "./component/Layouts/Header";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
