import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import {ipAPI, ipFotos} from '../../../../link_config'
import Estrelas from 'react-star-ratings'

export default class CardConfeiteiro extends Component{

    constructor(props){
        super(props);

        this.state = {perfilConfeiteiro: [], confeiteiro:'', enderecoConfeiteiro:'', estadoConfeiteiro:'',avaliacao:0};
        console.log(this.props.codConfeiteiro);
    }

    componentDidMount(){
        $.ajax({
            url: `${ipAPI}enderecoconfeiteiro/${this.props.codConfeiteiro}`,
            dataType: "json",
            success: function(resposta){
                this.setState({perfilConfeiteiro: resposta.confeiteiro});
                this.setState({enderecoConfeiteiro: resposta.endereco.cidade});
                this.setState({estadoConfeiteiro: resposta.endereco.cidade.estado.uf});
                
                var nota = this.state.perfilConfeiteiro.avaliacao.toFixed(2)
                this.setState({avaliacao:nota})
                
            }.bind(this)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div key={this.state.perfilConfeiteiro.codConfeiteiro} className="col-6 col-sm-8 col-md-7 col-lg-12 col-xl-8">
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
                                            {this.state.avaliacao}
                                        </div>
                                            <Estrelas starDimension="25px" starRatedColor="#fcba03" starEmptyColor="#dedede" starSpacing="1px" rating={this.state.perfilConfeiteiro.avaliacao} numberOfStars={5}></Estrelas>
                                        <p className="av">Avaliações:</p>
                                    </div>
                                </div> 
                            </div>
                            
                            <div className="text-center d-flex justify-content-center col-md-12">
                                <Link to={"/confeiteiro/" + this.props.codConfeiteiro}>
                                    <div className="link_produto mr-5" valor='1'>
                                        <p className="texto">Meu perfil</p>
                                    </div>
                                </Link>
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