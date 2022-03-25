import React from "react";
import './menu-style.css'

export const Menu = () =>{
    return(
        <div className="main-menu">
            <div className="card">
                <img src="https://images.pexels.com/photos/3108920/pexels-photo-3108920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="card-img-top" alt="foto de uma mulher com cabelos cacheados"/>
                <div className="card-body">
                    <h1>Cabelos Cacheados</h1>
                </div>
            </div>
            <div className="card">
                <img src="https://images.pexels.com/photos/3061307/pexels-photo-3061307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="foto de uma mulher com cabelos cacheados"/>
                <div className="card-body">
                    <h1>Cabelos Lisos</h1>
                </div>
            </div>
            <div className="card">
                <img src="https://images.pexels.com/photos/7312328/pexels-photo-7312328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="foto de uma mulher com cabelos cacheados"/>
                <div className="card-body">
                    <h1>Cabelos com Química</h1>
                </div>
            </div>
        </div>
    )
}