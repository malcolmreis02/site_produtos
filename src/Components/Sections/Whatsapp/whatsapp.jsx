import './whatsapp-style.css'
import React, { useState } from 'react'

export const Whatsapp = () => {


    const [nome, setNome] = useState('')
    const [servico, setServico] = useState('')

    var link = `https://api.whatsapp.com/send?phone=5519997272309&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${nome}%20e%20eu%20gostaria%20de%20adquirir%20um%20desses%20produtos%20personalizados%20para%20cada%20tipo%20de%20cabelo.`

    return(

        <div className='whatsapp-main'>
            <div className='whatsapp-content'>
                <div className='whatsapp-title'>
                    <p>RENOVE A ESTRUTURA DO SEU CABELO</p>
                    <p>SEU CABELO MOLDA O SEU ROSTO, É MUITO IMPORTANTE QUE ELE ESTEJA SEMPRE BRILHOSO E MUITO BEM HIDRATADO</p>
                    <small className='text-muted'>PREENCHA ESSE FORMULÁRIO E ME CHAME NO WHATSAPP</small>
                </div>

                <div className='formulario'>
                    <form>

                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" className="form-control opacity-75" onChange={(event)=>(setNome(event.target.value))} id="floatingInputGrid" value={nome}/>
                                <label htmlFor="floatingInputGrid">Meu nome é:</label>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Produtos</label>
                                <select className="form-select opacity-75" id="inputGroupSelect01" onChange={(event)=>(setServico(event.target.value))} value={servico} >
                                    <option defaultValue={''}>Eu preciso de produtos para cabelos:</option>
                                    <option value="cacheados">cacheados</option>
                                    <option value="lisos">lisos</option>
                                    <option value="quimicos">com química</option>
                                </select>
                        </div>
                        <a href= {link} className="btn btn-outline-success btn-lg enabled" tabIndex="-1" role="button" aria-disabled="true">Fazer orçamento...</a>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}