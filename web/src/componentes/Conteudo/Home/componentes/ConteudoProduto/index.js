import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/rate.css';
import img from '../../img/app.jpg'
import $ from 'jquery';
import {ipAPI, ipFotos} from '../../../../../link_config'


export class Produto extends Component{


    constructor(props){

        super(props);

        this.state = {listaProdutos: []};

    }

    componentDidMount(){

        $.ajax({
           
            url: `${ipAPI}produto/categoria/`+this.props.codigo,
            dataType: "json",
            success: function(resposta){
                this.setState({listaProdutos: resposta});
                console.log(resposta);
            }.bind(this)
        })
    }

    atualizarListagemProdutos(novaLista){
        this.setState({listaProdutos: novaLista});
    }



    render(){
        return(
            <div className="container bolo" id={this.props.id}>
                <div className="titulo mx-auto">
                    <h1>{this.props.titulo}</h1>
                    <hr></hr>
                </div>
            
                {this.state.listaProdutos.map(produtos =>
                
                    <div key={produtos.codProduto} className="card text-center prod mb-5"  style={{'width': '14rem'}}>
                        <img className="card-img-top imagens-bolos" src={ipFotos+produtos.foto} alt={produtos.nomeProduto}/>
                        <div className="card-body">
                            <h5 className="card-title nome-bolo-adm">{produtos.nomeProduto}</h5>
                            <p className="card-text">R${produtos.preco}</p>
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
                )}
            </div> 

        );
    }

}
