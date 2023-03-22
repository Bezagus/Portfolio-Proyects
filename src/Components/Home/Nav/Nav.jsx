import React from 'react';
import './Nav.css';
import LogoChico from '../../../Assets/Logo-Chico.svg';
import LogoGrande from '../../../Assets/Logo-Grande.svg'


export default function Nav({home}){
  return (
    <div className='Nav__Container' id='nav'>
        <div className='Nav__Logo'>
            <img src={LogoGrande} alt="Logo Agustin Benitez" className='Logo-Grande'/>
            <img src={LogoChico} alt="Logo Agustin Benitez" className='Logo-Chico'/>
        </div>
        {
          !home &&
          <ul className='Nav__Links'>
            <li><a href="https://agustinbenitez.vercel.app/" target="_blank">Portfolio</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#about">Sobre Mi</a></li>
          </ul>
        }
        {
          home &&
          <ul className='Nav__Links'>
            <li><a href="https://agustinbenitez.vercel.app/" target="_blank">Portfolio</a></li>
            <li><a href="/">Inicio</a></li>
          </ul>
        }
        
    </div>
  )
}