import React, { Component } from 'react';
import InputAvaliar from '../InputAvaliar'
import TextAvaliar from '../TextAvaliar'

export default class AvaliarProduto extends Component{
    render(){
        return(
            <div className="form-row mt-3 mb-4">
                <div className="col-md-8 container">
                    <h4 className="card-text">Avalie este produto:</h4>
                    <h6>Sua Avaliação:*</h6>
                    <div className="rate">
                        <input type="radio" id="star5" name="ratez" value="5" />
                        <label htmlFor="star5" title="5 entrelas">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label htmlFor="star4" title="4 entrelas">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label htmlFor="star3" title="3 entrelas">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label htmlFor="star2" title="2 entrelas">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label htmlFor="star1" title="1 entrela">1 star</label>
                    </div>
                </div>
                <div className="container col-md-8 mt-3 ">
                    <TextAvaliar titulo="Escreva sua opinião:*" className="form-control txtArea" id="txt_opiniao" rows="5"/>
                    <div className="form-row mt-2">
                        <InputAvaliar className="form-group col-md-6" label="Nome:*" type="text" id="txt_nome" classeIp="form-control"/>
                        <InputAvaliar className="form-group col-md-6" label="Email:*" type="email" id="txt_email" classeIp="form-control"/>
                        <InputAvaliar className="form-group col-md-6" type="button" id="txt_email" classeIp="btn btn-primary" value="Enviar"/>
                    </div>
                </div>
            </div>
        );
    }
}