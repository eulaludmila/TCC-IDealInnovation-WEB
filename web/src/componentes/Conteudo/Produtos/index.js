import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import axios from 'axios';
import { ipAPI, ipFotos } from '../../../link_config';
import {Link} from 'react-router'
import Estrelas from 'react-star-ratings'
import "../Produtos/produtos.css"

class Produtos extends Component{

    constructor(props){
        super(props);

        this.state = {listaProdutos: [], listaCategorias: [], itemClicado: 1, listaPesquisa: []}

    }

    componentDidMount(){

        axios.get(ipAPI + "categoria")
        .then(resposta => {
             const categorias = resposta.data;

             this.setState({listaCategorias: categorias})
        })

        this.listarProdutos(1);

       
    }

  
    listarProdutos(codCategoria){
       
        axios.get(`${ipAPI}produto/categoria/`+codCategoria)
        .then(resposta => {

            const produtos = resposta.data;
            this.setState({listaProdutos: produtos})
            
            this.setState({itemClicado: codCategoria});
        })

    }

    
    setPesquisa = (evento) => {
        this.setState({pesquisa: evento.target.value});

        if(evento.target.value == ""){
            this.listarProdutos(this.state.itemClicado)
        }
       
    }

    pesquisar = (pesquisa) => {

        var p = this.state.listaProdutos.filter( 
            evento => pesquisa === evento.nomeProduto || pesquisa === evento.descricao
        )


        this.setState({listaProdutos: p})

        console.log(this.state.listaPesquisa)

    }



    render(){
  
        return(

           
                

            <div className="container bolo" id={this.props.id}>
          
                <div className="titulo mx-auto">
                    <div className="d-flex justify-content-center">

                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                            {this.state.listaCategorias.map(categorias => 

                                <li className="nav-item categoria" key={categorias.codCategoria}>
                                    <span className={categorias.codCategoria === this.state.itemClicado ? "nav-link active" : "nav-link"}  id={categorias.codCategoria} onClick={()=>this.listarProdutos(categorias.codCategoria)}>{categorias.categoria}</span>
                                </li>

                            )}
                             

                        </ul>
                    </div>
                    <hr></hr>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm"> </div>
                            <div className="input-group pesquisa">
                                <input type="text"  className="form-control border-0 flexdatalist-alias flex0 input-pesquisa" id="pesquisa" onChange={this.setPesquisa} placeholder="Pesquisa por um produto ..."/>
                                <div className="input-group-append">
                                    <button className="btn btn-pesquisa btn-sm px-3 border-0" type="submit" onClick={() => this.pesquisar(this.state.pesquisa)}></button>
                                </div>
                            </div>
                            <div class="col-sm"> </div>
                        </div>
                    </div>
                    
                </div>

                <div className="container pt-5">

                {this.state.listaPesquisa.map(produtos =>
                    <div key={produtos.codProduto}>
                    <Link to={"/descricao/" + produtos.codProduto}><div className="card text-center prod mb-5"  style={{'width': '14rem'}}>
                        <img className="card-img-top imagens-bolos" src={ipFotos+produtos.foto} alt={produtos.nomeProduto}/>
                        <div className="card-body">
                        <h5 className="card-title nome-bolo-adm ">{produtos.nomeProduto}</h5>
                            <p className="card-text">R${produtos.preco}</p>
                            <div className="avaliacao">
                            <Estrelas starDimension="25px" starRatedColor="#fcba03" starEmptyColor="#dedede" starSpacing="1px" rating={produtos.avaliacao} numberOfStars={5}></Estrelas>
                            </div>
                        </div>
                    </div></Link>
                    </div>
                )}
                

                {this.state.listaProdutos.map(produtos =>
                    <div key={produtos.codProduto}>
                    <Link to={"/descricao/" + produtos.codProduto}><div className="card text-center prod mb-5"  style={{'width': '14rem'}}>
                        <img className="card-img-top imagens-bolos" src={ipFotos+produtos.foto} alt={produtos.nomeProduto}/>
                        <div className="card-body">
                        <h5 className="card-title nome-bolo-adm">{produtos.nomeProduto}</h5>
                            <p className="card-text">R${produtos.preco}</p>
                            <div className="avaliacao">
                            <Estrelas starDimension="25px" starRatedColor="#fcba03" starEmptyColor="#dedede" starSpacing="1px" rating={produtos.avaliacao} numberOfStars={5}></Estrelas>
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

export default Produtos;