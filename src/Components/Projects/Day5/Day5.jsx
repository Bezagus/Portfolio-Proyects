import React from "react";
import { useNavigate } from "react-router-dom";
import './Day5.css'


export default function Day5(){

    const navigate = useNavigate();

    setTimeout(function(){
        navigate('/')
    }, 2000)

    return(
        <div className="div_container-day5">
            <div class="card shadow">
                <h2>Pagina no Encontrada</h2>
                <div class="spinner center">
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                </div>
                <p>Redirigiendo</p>
            </div>
        </div>
    )
}