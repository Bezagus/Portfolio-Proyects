import React from "react";
import { Link, NavLink, useNavigate  } from "react-router-dom";
import './Card.css';
import './Background-cards.css'

export default function Card({ title, description, background, link, redirectUrl, web}){

	const navigate = useNavigate()

	function redirectNavigate(){
		navigate(redirectUrl)
	}

    return(
		<div class="Card__Container">
				<div class={`Backgroud__img ${background}`}>
				</div>
				<div class="Card__title">{title}</div>
				<h3>Puesto:</h3>
				<p class="Card__Description">{description}</p>
				{
					link &&
					<a href={link} target="_blank"><button class="Card__button">Ver Proyecto</button></a>
				}
				{
					redirectUrl &&
					<button class="Card__button" onClick={()=>redirectNavigate(redirectUrl)}>Ver Proyecto</button>
				}
				{
					!link && !redirectUrl &&
					<button class={!web ? "Card__button" : "Card__button-display-none"}>Ver Proyecto</button>
				}
	  	</div>
    )
}

