import React from "react";
import './menu-style.css'

export const Menu = () =>{
    return(
        <div className="main-menu">
            <div className="card">
                <a href="#banner-cachos"><img src="https://images.pexels.com/photos/3108920/pexels-photo-3108920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="card-img-top" alt="foto de uma mulher com cabelos cacheados"/></a>
                <div className="card-body">
                    <a href="#banner-cachos"><h3>Cabelos Cacheados</h3></a>
                </div>
            </div>
            <div className="card">
                <a href="#banner-lisos"><img src="https://images.pexels.com/photos/3061307/pexels-photo-3061307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="foto de uma mulher com cabelos cacheados"/></a>
                <div className="card-body">
                    <a href="#banner-lisos"><h3>Cabelos Lisos</h3></a>
                </div>
            </div>
            <div className="card">
                <a href="#banner-quimicas"><img src="https://images.pexels.com/photos/7312328/pexels-photo-7312328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="foto de uma mulher com cabelos cacheados"/></a>
                <div className="card-body">
                    <a href="#banner-quimicas"><h3>Cabelos com Química</h3></a>
                </div>
            </div>
        </div>
    )
}