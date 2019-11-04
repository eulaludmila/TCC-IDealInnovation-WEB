import React, { Component } from 'react';
import axios from 'axios';
import { ipAPI,ipFotos } from '../../../../../../link_config';
import Estrelas from 'react-star-ratings'


export default class Produtos extends Component{

    constructor(props){
        super(props);
        
        this.state = {listaProdutos: []};
    }

    componentDidMount(){
        axios.get(`${ipAPI}produto/melhoravaliados/${this.props.codConfeiteiro}`)
        .then(resposta => {
            const produtos = resposta.data;
            
            this.setState({listaProdutos: produtos})
            console.log(resposta.data);
        })
    }

    render(){
        return(
            <div className="container">
                <hr className="mb-5"></hr>
                <div className="form-row">
                    {this.state.listaProdutos.map(produto =>
                    <div key={produto.codProduto} className="form-group col-md-3 d-flex justify-content-around">
                        <div className="card text-center prod mb-5" style={{'width': '14rem'}}>
                            <img className="card-img-top imagens-bolos" src={ipFotos+produto.foto} alt={produto.nomeProduto} title={produto.nomeProduto}/>
                            <div className="card-body">
                                <h5 className="card-title nome_bolo">{produto.nomeProduto}</h5>
                                <p className="card-text produto">A partir de <span className="preco">R${produto.preco}</span></p>
                                <div className="avaliacao">
                                    <Estrelas starDimension="25px" starRatedColor="#fcba03" starEmptyColor="#dedede" starSpacing="1px" rating={produto.avaliacao} numberOfStars={5}></Estrelas>
                                </div>
                            </div>
                        </div>
                    </div> 
                    )}       
                </div>
            </div>
        );
    }
}