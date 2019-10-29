import React, {Component} from 'react';
import img from '../../../img/bolo_chocolate.jpg'
import Header from '../Header';
import {ContainerAdm} from '../../../styles'

export class AreaPedidos extends Component{
    render(){
        return(
            <ContainerAdm className="container conteudo">
                <div >
                    <h2 class="sub">Em andamento</h2>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <div class="card m-5 caixa_produto">
                            <div class="caixa_img">
                                <img src={img} class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Bolo de chocolate</h5>
                                <p class="texto_produto">Data de entrega:</p>
                                <p class="texto_produto">Quantidade:</p>
                                <p class="texto_produto">Kg:</p>
                                <p class="texto_produto">Preço:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerAdm>
        );
    }
}

export class BoxPedidos extends Component{

    constructor(props){
        super(props)
        this.state={status:''}
    }

    render(){
        return(
            <div>
                <Header titulo="Produtos Aprovados"></Header>
                <AreaPedidos></AreaPedidos>
            </div>
        );
    }
}