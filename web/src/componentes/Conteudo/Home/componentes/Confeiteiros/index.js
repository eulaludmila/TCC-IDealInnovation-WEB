import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/rate.css';
import $ from 'jquery';



export class Confeiteiro extends Component{


    constructor(props){

        super(props);

        this.state = {listaConfeiteiros: []};
    }

    componentDidMount(){

        
        $.ajax({
           
            url: "http://54.242.6.253:8080/confeiteiroDTO/avaliacao",
            dataType: "json",
            success: function(resposta){
                this.setState({listaConfeiteiros: resposta});
            }.bind(this)
        })
    }

    atualizarListagemProdutos(novaLista){
        this.setState({listaConfeiteiros: novaLista});
    }



    render(){
        return(
            <div className="container bolo" id={this.props.id}>
                <div className="titulo mx-auto">
                    <h1>{this.props.titulo}</h1>
                    <hr></hr>
                </div>
            
                {this.state.listaConfeiteiros.map(confeiteiros =>
                
                    <div className="card text-center prod mb-5"  style={{'width': '14rem'}}>
                        <img className="card-img-top imagens-bolos" src={"http://54.242.6.253"+confeiteiros.foto} alt={confeiteiros.nome}/>
                        <div className="card-body">
                            <h5 className="card-title nome-bolo-adm">{confeiteiros.nome}</h5>
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
