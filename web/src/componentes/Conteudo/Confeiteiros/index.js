import React, { Component } from 'react';

import '../../../css/bootstrap.min.css';
import axios from 'axios';
import { ipAPI,ipFotos } from '../../../link_config';
import {Link} from 'react-router'
import Estrelas from 'react-star-ratings'


export class Confeiteiros extends Component{

    constructor(props){
        super(props);

        this.state = {listaConfeiteiros: [], itemClicado: "idTodos",todosConfeiteiros:`${ipAPI}confeiteiroDTO/ativo`, melhoresAvaliados:`${ipAPI}confeiteiroDTO/avaliacao/confeiteiros`}
    }


    componentDidMount(){

        axios.get(ipAPI + "confeiteiroDTO/ativo")
        .then(resposta => {
             const confeiteiro = resposta.data;

             this.setState({listaConfeiteiros: confeiteiro})
        })

    }

    listarProdutos(idClicado){
       
        if(idClicado ==="idTodos"){
            axios.get(ipAPI+"confeiteiroDTO/ativo")
            .then(resposta => {

                const confeiteiros = resposta.data;
                this.setState({listaConfeiteiros: confeiteiros})
                
                this.setState({itemClicado: idClicado});
            })
        }else if(idClicado ==="maisAvaliados"){
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

          

            <div className="container bolo" id={this.props.id}>
          
                
                <div className="titulo mx-auto">


                    <div className="d-flex justify-content-center">

                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                             
                                <li className="nav-item categoria">
                                    <span className={"idTodos" === this.state.itemClicado ? "nav-link active" : "nav-link"}  id="idTodos" onClick={()=>this.listarProdutos("idTodos")}>Todos</span>
                                </li>
                                <li className="nav-item categoria">
                                    <span className={"maisAvaliados" === this.state.itemClicado ? "nav-link active" : "nav-link"}  id="maisAvaliados" onClick={()=>this.listarProdutos("maisAvaliados")}>Melhores Avaliados</span>
                                </li>

                            

                        </ul>

                    </div>
                    <hr></hr>
                </div>
                

                <div className="container pt-5">

                {this.state.listaConfeiteiros.map(confeiteiro =>
                    <div key={confeiteiro.codConfeiteiro}>
                        <Link to={"/confeiteiro/" + confeiteiro.codConfeiteiro}><div className="card text-center prod mb-5"  style={{'width': '14rem'}}>
                            <img className="card-img-top imagens-bolos" src={ipFotos+confeiteiro.foto} alt={confeiteiro.nome}/>
                            <div className="card-body">
                                <h5 className="card-title nome-bolo-adm">{confeiteiro.nome}</h5>
                                <div className="avaliacao">
                                    
                                    <Estrelas starDimension="25px" starRatedColor="#fcba03" starEmptyColor="#dedede" starSpacing="1px" rating={confeiteiro.avaliacao} numberOfStars={5}></Estrelas>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                )}
                </div>
            </div> 
           
                
        
        
        );
    }

}
