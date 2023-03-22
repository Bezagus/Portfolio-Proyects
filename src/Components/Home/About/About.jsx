import React from "react";
import MyImage from '../../../Assets/IMG-0432.jpg'
import './About.css'

export default function About(){
    return(
        <div className="About__Container" id="about">
            <div className="About__img">
                <img src={MyImage} alt="Agustin Benitez" />
            </div>
            <div className="About__Description">
                <h2>Sobre Mi</h2>
                <p>
                    Soy Agus un Chico de 20 años, me considero una persona optimita, perseverante y disiplinado.
                </p>
                <p>
                    Empece en el mundo de la programacion a los 17 años, en principio de enfoque en desarollar la logica,
                    cuando termine la secuendaria empece los cursos de Soy Dalton los cuales me motivaron a seguir creciendo
                    como programador y decidi anotarme al boorcamp de Soy Henry el cual me recibi en Dicimebre de 2022 como Full-Stack
                    Developer.
                </p>
                <p>
                    El haber logrado ese titulo me motivo aun mas y me hizo darme cuenta que esto es a lo que me quiero dedicar
                    Actualmente me encuento estudiando Analista de sistemas en Da Vinci y mi foco no a parado. 
                </p>
                <p>
                    El Objetivo de este Sitio es poder mostrarles mis proyectos en los que estuve trabajando y poder subir futuros proyectos
                    para no solo racalcar de forma escrita las herramientas y tecnologias que se sino tambien mostrar mi trabajo.
                </p>
            </div>
        </div>
    )
}