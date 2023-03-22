import React from 'react';
import './Description.css';
import ScrollIcon from '../../../Assets/chevrons-down-regular-24.png'

export default function Description(){
  return (
    <div className='Description__Container'>
        <div className='Description__Div'>
            <h1>Mis Proyectos</h1>
            <p>Mi Nombre Es Agustin Benitez, Cree Este Proyecto con el objetivo de compartir mini Proyectos realizados.</p>
            <p>Soy Recibido de Henry como Full-Stack Developer con amplios conociminetos en HTML | CSS | JavaScript | React | Redux | SQL (Postgres) | Node.Js | Express | Sequelize.</p>
            <p>Actualmente me encuentro estudiando Analista de Sistemas en Da Vinci.</p>

            <img src={ScrollIcon} alt="Scroll Icon" />
        </div>
    </div>
  )
}