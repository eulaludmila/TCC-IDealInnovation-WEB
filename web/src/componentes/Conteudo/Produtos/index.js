import React, { Component } from 'react';

import { Footer } from '../Footer';
import '../../../css/bootstrap.min.css';
import '../../../css/bootstrap.min.css';
import axios from 'axios';
import { ipAPI } from '../../../link_config';

class Produtos extends Component{

    constructor(props){
        super(props);

        this.state = {listaProdutos: [], listaCategorias: [], itemClicado: 0}


    }


    componentDidMount(){

        axios.get(ipAPI + "categoria/")
        .then(resposta => {
             const categorias = resposta.data;

             this.setState({listaCategorias: categorias})
        })

       
    }

  
    listarProdutos(codCategoria){
       
        axios.get('http://54.242.6.253:8080/produto/categoria/'+codCategoria)
        .then(resposta => {

            const produtos = resposta.data;
            this.setState({listaProdutos: produtos})
            
            this.setState({itemClicado: codCategoria});
        })

    }

    render(){
  
        return(

            <div> 

            <div className="container bolo" id={this.props.id}>
          
                
                <div className="titulo mx-auto">


                    <div className="d-flex justify-content-center">

                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                            {this.state.listaCategorias.map(categorias => 

                                <li className="nav-item">
                                    <span className={categorias.codCategoria === this.state.itemClicado ? "nav-link active" : "nav-link"}  id={categorias.codCategoria} onClick={()=>this.listarProdutos(categorias.codCategoria)}>{categorias.categoria}</span>
                                </li>

                            )}

                        </ul>

                    </div>
                    <hr></hr>
                </div>
                

                <div className="container pt-5">

                {this.state.listaProdutos.map(produtos =>
                
                    <div className="card text-center prod mb-5"  style={{'width': '14rem'}}>
                        <img className="card-img-top imagens-bolos" src={"http://54.242.6.253"+produtos.foto} alt={produtos.nomeProduto}/>
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
            </div> 
                <Footer/>
            </div>
           
                
        
        
        );
    }

}

export default Produtos;