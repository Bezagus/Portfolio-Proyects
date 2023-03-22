import React from 'react';
import About from './About/About.jsx';
import Description from './Description/Description.jsx';
import Footer from './Footer/Footer.jsx';
import Nav from './Nav/Nav';
import Projects from './Projects/Projects.jsx';

export default function Home(){
  return (
    <div>
        <Nav/>
        <Description/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
  )
}