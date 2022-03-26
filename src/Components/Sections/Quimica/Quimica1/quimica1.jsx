import './quimica1-style.css'
import React from 'react'

export const Quimica1 = () => {
    return(
        <div className='quimica1-main'>
            <div className='quimica1-content'>
                <div className="card">
                    <img src="https://i.ibb.co/ZzkRS4F/hosil.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Alto poder de condicionamento e melhor desembaraço além de redução da quebra, controle do frizz e brilho aos cabelos, deixando-os saudáveis e bonitos.</p>
                    </div>
                </div>
                <div className="card">
                <img src="https://i.ibb.co/Df43kNw/Whats-App-Image-2022-03-25-at-16-02-05.jpg" alt="Whats-App-Image-2022-03-25-at-16-02-05" border="0"/>
                    <div className="card-body">
                        <p className="card-text">O Óleo de Baobá possui vitaminas essenciais que impedem o ressecamento dos fios e confere brilho intenso</p>
                    </div>
                </div>
                <div className="card">
                <img src="https://i.ibb.co/GTZF66T/Whats-App-Image-2022-03-25-at-16-03-07.jpg" alt="Whats-App-Image-2022-03-25-at-16-03-07" border="0"/>
                    <div className="card-body">
                        <p className="card-text">Promove hidratação profunda para renovar completamente a estrutura de cabelos ressecados e frágeis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}