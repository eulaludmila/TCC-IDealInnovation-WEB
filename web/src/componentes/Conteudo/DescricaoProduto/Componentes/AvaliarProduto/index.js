import React, { Component } from 'react';
import InputAvaliar from '../InputAvaliar'
import TextAvaliar from '../TextAvaliar'
import Estrelas from 'react-star-ratings'

export default class AvaliarProduto extends Component{
    render(){
        return(
            <div className="form-row mt-3 mb-4">
                <div className="col-md-8 container">
                    <h4 className="card-text">Avalie este produto:</h4>
                    <h6>Sua Avaliação:*</h6>
                    <div className="rate">
                        <Estrelas starDimension="25px" starHoverColor="#fcba03" starRatedColor="#fcba03" starEmptyColor="#dedede" starSpacing="1px" changeRating name="estrelas"></Estrelas>
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