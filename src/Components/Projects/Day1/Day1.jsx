import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from '../../Home/Nav/Nav.jsx';
import Footer from "../../Home/Footer/Footer.jsx";
import './Day1.css'

export default function Day1(){

    const [active , setActive] = useState(1)
    const navigate = useNavigate()

    return(
        <div>
            <Nav home={true}/>
            <div className="Div__Day1__Container">
                <div className="Day1__Container">
                    <div class={active === 1? "Day1__panel-divs active Day1__panel-divs-1" : "Day1__panel-divs Day1__panel-divs-1"} onClick={()=>setActive(1)} >
                    <h3>Image 1</h3>
                    </div>
                    <div class={active === 2? "Day1__panel-divs active Day1__panel-divs-2" : "Day1__panel-divs Day1__panel-divs-2"} onClick={()=>setActive(2)} >
                        <h3>Image 2</h3>
                    </div>
                    <div class={active === 3? "Day1__panel-divs active Day1__panel-divs-3" : "Day1__panel-divs Day1__panel-divs-3"} onClick={()=>setActive(3)} >
                        <h3>Image 3</h3>
                    </div>
                    <div class={active === 4? "Day1__panel-divs active Day1__panel-divs-4" : "Day1__panel-divs Day1__panel-divs-4"} onClick={()=>setActive(4)} >
                        <h3>Image 4</h3>
                    </div>
                    <div class={active === 5? "Day1__panel-divs active Day1__panel-divs-5" : "Day1__panel-divs Day1__panel-divs-5"} onClick={()=>setActive(5)} >
                        <h3>Image 5</h3>
                    </div>
                </div> 
            </div> 
            <Footer/>
        </div>
    )
}