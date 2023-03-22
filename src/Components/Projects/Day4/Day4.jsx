import React, { useState } from "react";
import './Day4.css';
import Nav from '../../Home/Nav/Nav.jsx';
import Footer from '../../Home/Footer/Footer.jsx'

export default function Day4(){

    const [active, setActive] = useState(false)
    const [input, setInput] = useState("")

    function onClick(){
        setActive(!active)
    }

    function handleChange(e){
        setInput(e.target.value)
    }

    return(
        <div className="day4-container-nav">
            <Nav home={true}/>
                <div className="div-container-day4">
                    <div class={active? "search active" : "search"}>
                        <input type="text" class="input" placeholder="Busca en Google..." onChange={(e)=>handleChange(e)} autoComplete='off' />
                            {
                                !input.length ?
                                <button class="btn" onClick={()=>onClick()}>
                                    <i class="fas fa-search"></i>
                                </button>:

                                <div class="btn btn-link">
                                    <a class="link" href={`https://www.google.com/search?q=${input.replace('+',' ')}`} target="_blank">
                                    <i class="fas fa-search"></i>
                                    </a>
                                </div>
                            }
                    </div>
                </div>
            <Footer/>
        </div>
    )
}