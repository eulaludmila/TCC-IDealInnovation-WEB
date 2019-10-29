import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { ipAPI } from '../../../../../../link_config';
import {ipFotos} from '../../../../../../link_config';

export default class ProdutosMaisBaratos extends Component{

    constructor(props){
        super(props);

        this.state = {listaProdutos: []};
    }

    componentDidMount(){
        
        axios.get(`${ipAPI}produto/menorpreco/${this.props.codConfeiteiro}/limit/4`)
        .then(resposta => {
            const produtos = resposta.data;

            this.setState({listaProdutos: produtos})
        })
    }

    render(){
        return(
            <div className="container">
                <hr className="mb-5"></hr>
                <div className="form-row">  
                {this.state.listaProdutos.map(produto =>      
                    <div className="form-group col-md-3 d-flex justify-content-around">
                        <div className="card text-center mb-3" style={{'width': '14rem'}}>
                            <img className="card-img-top imagens-bolos" src={ipFotos+produto.foto} alt={produto.nomeProduto} title={produto.nomeProduto}/>
                            <div className="card-body">
                                <h5 className="card-title nome_bolo">{produto.nomeProduto}</h5>
                                <p className="card-text produto">A partir de <span className="preco">R${produto.preco}</span></p>
                                <div className="avaliacao">
                                    <div className="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
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
                            </div>
                        </div>
                    </div> 
                )}
                </div>
                <Link to={"/confeiteiro/" + this.props.codConfeiteiro + "/produto/menorpreco"}>
                    <div className="col-md-12">
                        <p className="text-right">Ver Mais</p>
                    </div>
                </Link>
            </div>
        );
    }
}