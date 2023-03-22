import React from "react";
import Card from "./Card/Card";
import { Link, NavLink, useNavigate  } from "react-router-dom";
import './Projects.css'

export default function Projects(){

    const navigate = useNavigate()
    
    return(
        <div className="Projects__Container" id="projects">
            <div>
                <Card title='"P. Individual Food"' background={`Pi-Food`} 
                link={`https://youtu.be/gUPLw4EThp4`} 
                description='Full-Stack Developer'/>
            </div>
            <div>
                <Card title='"Proyecto Final"' background={`P-Final`} 
                link={`https://youtu.be/Y2hWncYXqjQ`} 
                description='Full-Stack Developer'/>
            </div>
            <div>
                <Card title='"Portfolio Personal"' background={`Portfolio_img`} 
                link={`https://agustinbenitez.vercel.app/`}
                description='Front-end Developer'/>
            </div>
            <div>
                <Card title='"Mis Proyectos"' background={`Projects_img`} 
                link={`#nav`}
                description='Front-end Developer'/>
            </div>
            <div>
                <Card title='"Expanding Cards"' background={`Project-Day1-img`} 
                redirectUrl={'/Expanding-Cards'}
                description='Displey Flex Responsive'/>
            </div>
            <div>
                <Card title='"Progress Steps"' background={`Project-Day2-img`} 
                redirectUrl={'/Progress-Steps'}
                description='Front-end'/>
            </div>
            <div>
                <Card title='"Rotating Navigation"' background={`Project-Day3-img`} 
                redirectUrl={'/Rotating-Navigation'}
                description='Front-end'/>
            </div>
            <div>
                <Card title='"Hidden Search"' background={`Project-Day4-img`} 
                redirectUrl={'/Hidden-Search'}
                description='Front-end'/>
            </div>
        </div>
    )
}