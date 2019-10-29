import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import {ipAPI, ipFotos} from '../../../../link_config'

export default class CardConfeiteiro extends Component{

    constructor(props){
        super(props);

        this.state = {perfilConfeiteiro: [], confeiteiro:'', enderecoConfeiteiro:'', estadoConfeiteiro:''};
        console.log(this.props.codConfeiteiro);
    }

    componentDidMount(){
        $.ajax({
            url: `${ipAPI}enderecoconfeiteiro/${this.props.codConfeiteiro}`,
            dataType: "json",
            success: function(resposta){
                console.log("lala")
                this.setState({perfilConfeiteiro: resposta.confeiteiro});
                this.setState({enderecoConfeiteiro: resposta.endereco.cidade});
                this.setState({estadoConfeiteiro: resposta.endereco.cidade.estado.uf});
                console.log(this.state.perfilConfeiteiro.foto)

            }.bind(this)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div key={this.state.perfilConfeiteiro.codConfeiteiro} className="col-6 col-md-7 ">
                        <div className=" d-flex justify-content-center">
                            <img src={ipFotos + this.state.perfilConfeiteiro.foto} alt={this.state.perfilConfeiteiro.nome} title={this.state.perfilConfeiteiro.nome} className="img-fluid img-thumbnail img_confeiteiro"/>
                        </div>
                        <div className="caixa_confeiteiro">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="caixa_info d-flex text-center flex-column bd-highlight">
                                        <p className="pl-3 nome_confeiteiro">{this.state.perfilConfeiteiro.nome}</p>
                                        <p className="pl-3 info_confeiteiro">{this.state.enderecoConfeiteiro.cidade}-{this.state.estadoConfeiteiro}</p>
                                        <p className="pl-3 info_confeiteiro">{this.state.perfilConfeiteiro.email}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="avaliacao_perfil mr-5">
                                        <div className="nota">
                                            4.5
                                        </div>
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
                                        <p className="av">Avaliações:</p>
                                    </div>
                                </div> 
                            </div>
                            
                            <div className="text-center d-flex justify-content-center col-md-12">
                                <Link to={"/confeiteiro/" + this.props.codConfeiteiro + "/produto"}>
                                    <div className="link_produto" valor='1'>
                                        <p className="texto">Produtos</p>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}