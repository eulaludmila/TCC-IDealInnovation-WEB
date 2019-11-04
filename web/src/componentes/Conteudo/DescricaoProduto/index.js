import React, { Component } from 'react';
import Produto from './Componentes/Produto';
import LinkApp from './Componentes/LinkApp';
import TotalAvaliacao from './Componentes/TotalAvaliacao';
import Comentarios from './Componentes/Comentarios';
import AvaliarProduto from './Componentes/AvaliarProduto';
import '../../../css/bootstrap.min.css';
import '../DescricaoProduto/css/descricao_produto.css';
import '../DescricaoProduto/css/rate.css';
import {Footer} from '../Footer'


export class DescricaoProduto extends Component{

    componentDidMount(){
        console.log(this.props.params.codProduto)
    }

    render(){
        return(

        <div>
            <div className="container">
                <Produto codigo={this.props.params.codProduto}/>
                <LinkApp/>
                <TotalAvaliacao/>
                <Comentarios/>
                <AvaliarProduto/>   
            </div>
            <Footer></Footer>
        </div>

        );
    }
}



export default DescricaoProduto;