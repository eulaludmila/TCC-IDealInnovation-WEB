import React, {Component} from 'react';
import img from '../../../img/bolo_chocolate.jpg'
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import {BotaoSolicitacoes} from '../global/BotaoSolicitacoesPedidos'

export class AreaSolicitacoes extends Component{
    render(){
        return(
            <ContainerAdm className="container conteudo">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div className="card m-5 caixa_produto">
                            <div className="caixa_img">
                                <img src={img} class="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bolo de chocolate</h5>
                                <p className="texto_produto">Dada de entrega: 20/10/2200</p>
                                <p className="texto_produto">Quantidade:</p>
                                <p className="texto_produto">Kg:</p>
                                <p className="texto_produto">Preço:</p>

                                <BotaoSolicitacoes id="Aceitar" tipo="button" classe="btn btn-success btn_salvar"></BotaoSolicitacoes>
                                <BotaoSolicitacoes id="Recusar" tipo="button" classe="btn btn-danger"></BotaoSolicitacoes>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerAdm>
        );
    }
}

export class BoxSolicitacoes extends Component{

    constructor(props){
        super(props)
        this.state={status:''}
    }

    render(){
        return(
            <div>
                <Header titulo="Solicitações de Produtos"></Header>
                <AreaSolicitacoes></AreaSolicitacoes>
            </div>
        );
    }
}