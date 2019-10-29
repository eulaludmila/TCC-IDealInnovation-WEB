import React, { Component } from 'react';

import { Footer } from '../Footer';
import '../../../css/bootstrap.min.css';
import '../../../css/bootstrap.min.css';
import axios from 'axios';
import { ipAPI } from '../../../link_config';
import {ipFotos} from '../../../link_config';

export class Confeiteiros extends Component{

    constructor(props){
        super(props);

        this.state = {listaConfeiteiros: [], itemClicado: "",todosConfeiteiros:"http://localhost:8080/confeiteiroDTO/ativo", melhoresAvaliados:"http://localhost:8080/confeiteiroDTO/avaliacao/confeiteiros"}
    }


    componentDidMount(){

        axios.get(ipAPI + "confeiteiroDTO/ativo")
        .then(resposta => {
             const confeiteiro = resposta.data;

             this.setState({listaConfeiteiros: confeiteiro})
        })

    }

    listarProdutos(idClicado){
       
        if(idClicado =="idTodos"){
            axios.get(ipAPI+"confeiteiroDTO/ativo")
            .then(resposta => {

                const confeiteiros = resposta.data;
                this.setState({listaConfeiteiros: confeiteiros})
                
                this.setState({itemClicado: idClicado});
            })
        }else if(idClicado =="maisAvaliados"){
            axios.get(ipAPI+"confeiteiroDTO/avaliacao/confeiteiros")
            .then(resposta => {

                const confeiteiros = resposta.data;
                this.setState({listaConfeiteiros: confeiteiros})
                
                this.setState({itemClicado: idClicado});
            })
        }
        

    }


    render(){
  
        return(

            <div> 

            <div className="container bolo" id={this.props.id}>
          
                
                <div className="titulo mx-auto">


                    <div className="d-flex justify-content-center">

                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                             
                                <li className="nav-item">
                                    <a className={"idTodos" == this.state.itemClicado ? "nav-link active" : "nav-link"}  id="idTodos" onClick={()=>this.listarProdutos("idTodos")}>Todos</a>
                                </li>
                                <li className="nav-item">
                                    <a className={"maisAvaliados" == this.state.itemClicado ? "nav-link active" : "nav-link"}  id="maisAvaliados" onClick={()=>this.listarProdutos("maisAvaliados")}>Melhores Avaliados</a>
                                </li>

                            

                        </ul>

                    </div>
                    <hr></hr>
                </div>
                

                <div className="container pt-5">

                {this.state.listaConfeiteiros.map(confeiteiro =>
                
                    <div className="card text-center prod mb-5"  style={{'width': '14rem'}}>
                        <img className="card-img-top imagens-bolos" src={ipFotos+confeiteiro.foto} alt={confeiteiro.nome}/>
                        <div className="card-body">
                            <h5 className="card-title nome-bolo-adm">{confeiteiro.nome}</h5>
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
            </div> 
                <Footer/>
            </div>
           
                
        
        
        );
    }

}
