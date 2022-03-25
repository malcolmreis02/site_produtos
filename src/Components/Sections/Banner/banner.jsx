import React from "react";
import './banner-style.css'

// <img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://images.pexels.com/photos/6945532/pexels-photo-6945532.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940" width="861" height="574">

export const Banner = () => {
    return(
        <div className="banner-main">
            <div className="banner-content">
                <h3>Art Cosméticos e Produtos Naturais</h3>
            </div>
        </div>
    )
}