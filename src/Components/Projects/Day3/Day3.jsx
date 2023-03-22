import React, { useState } from "react";
import Nav from '../../Home/Nav/Nav.jsx';
import Footer from '../../Home/Footer/Footer.jsx'
import './Day3.css';
import MenuIcon from '../../../Assets/menu.png';
import XIcon from '../../../Assets/x.png';
import Davinci from '../../../Assets/davinci.jpg'

export default function Day3(){

    const [showNav, setShowNav] = useState(false)

    function onClick(){
        setShowNav(!showNav)
    }
    
    return(
        <div>
            <div class={showNav ? "containerDay3 show-nav" : "containerDay3"}>

                <div class="circle-container">
                    <div class="circle">
                        <button id="close" onClick={()=>onClick()}>
                            <i class="fas fa-times"></i>
                        </button>
                        <button id="open" onClick={()=>onClick()}>
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>

                <div class="content">
                            <h1>Analista de Sistemas</h1>
                            <small>Agustin Benitez</small>
                            <p>Escuela Da Vinci ofrece carreras con un alto grado de especialización y una rápida inserción
                                laboral, tanto en el mercado nacional como en el internacional, además de la oportunidad 
                                de seguir estudiando carreras universitarias a través de convenios con las mejores 
                                universidades argentinas. Ellas convalidan el título obtenido en Da Vinci y te permiten 
                                obtener tu Licenciatura. Consultanos acerca de esta opción.
                            </p>
                    <img src={Davinci} alt="perro"/>
                    <h3>Programa</h3>
                    <p>
                        Da Vinci Ofrece una carrera muy completa donde nos forma en los sectores de desarollo de Software, desarollo Web, Desarollo de Apps Moviles, gestion de Proyectos, Organicacion de empresas y mucho mas...
                        Tambien nos ofrece Talleres los cuales nos sirven como complemento de nuestra carrera tanto para reforzar conocimientos como para aprender nuevas tecnologias.
                        Lenguajes y Softwares: Java, HTML5, CSS3, .NET, C++, C#, Javascript, Jquery, AngularJS, PHP, SQL Server, Oracle, MySQL, Linux, Android.
                    </p>
                </div>
            </div>

            <nav className="Nav__Day3">
            <ul>
                <li><i class="fas fa-home"></i><a href="/">Inicio</a></li>
                <li><i class="fas fa-user-alt"></i><a href="https://agustinbenitez.vercel.app/" target="_blank">Prtofolio</a></li>
            </ul>
            </nav>
        </div>
    )
}
/* 
<div className="Div__Container-Project-day3">
                <div class={showNav? "Project-Day3-container show-nav" : "Project-Day3-container"}>

                <div class="Project-Day3-circle-container">
                    <div class="Project-Day3-circle">
                        <button id="Project-Day3-close" className={showNav? "btn__Project-Day3": "btn__Project-Day3-none"} onClick={()=>onClick()}>
                            <i class="fas fa-times"></i>
                        </button>
                        <button id="Project-Day3-open" className={!showNav? "btn__Project-Day3": "btn__Project-Day3-none"} onClick={()=>onClick()}>
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>

                <div class="Project-Day3-content">
                    <h1>Analista de Sistemas</h1>
                    <small>Agustin Benitez</small>
                    <p>Escuela Da Vinci ofrece carreras con un alto grado de especialización y una rápida inserción laboral, tanto en el mercado nacional como en el internacional, además de la oportunidad de seguir estudiando carreras universitarias a través de convenios con las mejores universidades argentinas. Ellas convalidan el título obtenido en Da Vinci y te permiten obtener tu Licenciatura. Consultanos acerca de esta opción.
                    </p>

                    
                    <img src={Davinci} alt="perro"/>
                    <h3>Programa</h3>
                    <p>
                        Da Vinci Ofrece una carrera muy completa donde nos forma en los sectores de desarollo de Software, desarollo Web, Desarollo de Apps Moviles, gestion de Proyectos, Organicacion de empresas y mucho mas...
                        Tambien nos ofrece Talleres los cuales nos sirven como complemento de nuestra carrera tanto para reforzar conocimientos como para aprender nuevas tecnologias.
                        Lenguajes y Softwares: Java, HTML5, CSS3, .NET, C++, C#, Javascript, Jquery, AngularJS, PHP, SQL Server, Oracle, MySQL, Linux, Android.</p>
                </div>
                </div>

                <nav className="nav__Project-day3">
                <ul>
                    <li><i class="fas fa-home"></i><a href="#">Inicio</a></li>
                    <li><i class="fas fa-user-alt"></i><a href="#">Sobre Mi</a></li>
                </ul>
                </nav>
        </div>
*/
