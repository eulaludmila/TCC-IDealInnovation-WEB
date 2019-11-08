import React, {Component} from 'react';
import Header from '../../../Header';
import Produtos from './Componentes/Produtos';
import {ContainerAdm} from '../../../../../styles'


export default class TodosAguardandoResposta extends Component{
    render(){
        return(
            <ContainerAdm className="container conteudo">
                <Produtos/>
            </ContainerAdm>
        );
    }
}

export class BoxTodosAguardandoResposta extends Component{

    constructor(props){
        super(props)
        this.state={status:''}
    }

    render(){
        return(
            <div>
                <Header titulo="Pedidos aguardando resposta"></Header>
                <TodosAguardandoResposta></TodosAguardandoResposta>
            </div>
        );
    }
}