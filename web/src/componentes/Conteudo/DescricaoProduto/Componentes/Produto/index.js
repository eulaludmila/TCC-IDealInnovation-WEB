import React, { Component } from 'react';
import Vendedor from '../Vendedor';
import Descricao from '../Descricao';
import SelectPesoQtd from '../SelectPesoQtd';
import $ from 'jquery';
import { ipFotos } from '../../../../../link_config';

export default class Produto extends Component{

    constructor(props){
        super(props)

        this.state={nomeProduto:"",preco:0,foto:"",nomeConfeiteiro:"",fotoConfeiteiro:"", descricao:"", tipoUni:"",labelProdutoSelect:"", resultado:""};
    }

    componentDidMount(){

        // console.log(this.props.params.codProduto)

        $.ajax({ 
            url: "http://54.242.6.253:8080/produto/" + this.props.codigo,
            contentType: "application/json",
            dataType: "json",
            type: "get",
            success: function(resposta){

                console.log(resposta.confeiteiro.foto)
                this.setState({nomeProduto: resposta.nomeProduto});
                this.setState({preco: resposta.preco});
                this.setState({imgFoto: resposta.foto});
                this.setState({nomeConfeiteiro: resposta.confeiteiro.nome});
                this.setState({fotoConfeiteiro: resposta.confeiteiro.foto});
                this.setState({descricao: resposta.descricao});
                this.setState({tipoUni: resposta.categoria.tipoUnidade});

            }.bind(this)
        })
    }

    render(){
        return(
            <div className="form-row tt mb-5">
                <div className="col-md-12 mt-2">
                    <h1>{this.state.nomeProduto}</h1>
                </div>
                <div className="col-md-6 mt-3">
                    <img src={"http://54.242.6.253"+ this.state.imgFoto} className="img-fluid" alt={this.state.nomeProduto} title={this.state.nomeProduto}/>
                    <div className="avaliacao">
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
                    <div className="row col-md-12 mt-2">
                        <p className="texto_preco">Preço a partir de: R$ {this.state.preco}</p>
                    </div>
                    <div className="form-row">
                        {(() => {
                            if(this.state.tipoUni == "uni."){
                                this.state.labelProdutoSelect = "Quantidade:";
                            }else{
                                this.state.labelProdutoSelect = "Kg:";
                            }
                        })()}
                            
                        <SelectPesoQtd  codigo={this.props.codigo} label={this.state.labelProdutoSelect } />
                    </div>
                </div>
                <div className="col-md-5">
                    <Vendedor nomeConfeiteiro={this.state.nomeConfeiteiro} fotoConfeiteiro={this.state.fotoConfeiteiro}/>
                    <Descricao descricao={this.state.descricao}/>
                </div>
            </div>
        );
    }
}