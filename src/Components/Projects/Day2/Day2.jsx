import React, { useState } from "react";
import Nav from '../../Home/Nav/Nav.jsx';
import Footer from '../../Home/Footer/Footer.jsx'
import './Day2.css';


export default function Day2(){

    const [active, setActive] = useState(1)
    const [btnNext, setBtnNext] = useState(true);
    const [btnPrev, setBtnPrex] = useState(false)


    const circle = document.querySelectorAll('.Project-Day2_circle');
    const actives = document.querySelectorAll('.active-day2');

    
    function nextClick(){
        const aux = active+1
        if(aux == circle.length){
            setBtnNext(false)
        }
        if(aux > 1){
            setBtnPrex(true)
        }
        setActive(active+1)
    }

    function prevClick(){
        const aux = active -1;
        if(aux == 1){
            setBtnPrex(false)
        }
        if(aux < circle.length){
            setBtnNext(true)
        }
        setActive(active-1)
    }

    const width = (active-1)/(circle.length-1)*100;

    return(
        <div>
            <Nav home={true}/>
            <div className="div__container-day2">
                <div class="project-day2_container">
                <div class="project-day2_progress-container">
                    <div class="project-day2_progress" id="progress-day2" style={{width: width+ '%'}}></div>
                    <div class={active >= 1? "Project-Day2_circle active-day2" : "Project-Day2_circle"}>1</div>
                    <div class={active >= 2? "Project-Day2_circle active-day2" : "Project-Day2_circle"}>2</div>
                    <div class={active >= 3? "Project-Day2_circle active-day2" : "Project-Day2_circle"}>3</div>
                    <div class={active >= 4? "Project-Day2_circle active-day2" : "Project-Day2_circle"}>4</div>
                </div>
                <button class="btn_Project-Day2" id="prev" disabled={!btnPrev? true : false} onClick={()=>prevClick()}>Prev</button>
                <button class="btn_Project-Day2" id="next" disabled={!btnNext? true : false} onClick={()=>nextClick()}>Next</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}