import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import NaoIniciados from './Componentes/NaoIniciados';
import Andamento from './Componentes/Andamento';
import Finalizados from './Componentes/Finalizados';
import Titulos from './Componentes/Titulos';

export class AreaPedidos extends Component{
    render(){
        return(
            <ContainerAdm className="container conteudo">
                <Titulos titulo="Não iniciados"/>
                <NaoIniciados codConfeiteiro={this.props.codConfeiteiro}/>
                <Titulos titulo="Em produção"/>
                <Andamento codConfeiteiro={this.props.codConfeiteiro}/>
                <Titulos titulo="Concluídos"/>
                <Finalizados codConfeiteiro={this.props.codConfeiteiro}/>
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
                <Header titulo="Produtos em Produção"></Header>
                <AreaPedidos codConfeiteiro={this.props.params.codConfeiteiro}></AreaPedidos>
            </div>
        );
    }
}