import React, {Component} from 'react';
import Header from '../Header'
import {ContainerAdm} from '../../../styles'
import { ipAPI, ipFotos } from '../../../link_config';
import axios from 'axios'



export class HomeProfissional extends Component{

    //CONSTRUTOR DECLARANDO OS ESTADOS
    constructor(props){
      super(props);

      this.state = {listaProdutos: []};

  }

  componentDidMount(){

    axios.get(`${ipAPI}produto/confeiteiro/`+this.props.codConfeiteiro,{headers: {'Authorization': sessionStorage.getItem('auth')}})
        .then(resposta => {

            const produtos = resposta.data;
            this.setState({listaProdutos: produtos})
            
        })
      
  }

  atualizarListagemProdutos(novalista){
      this.setState({listaProdutos: novalista});
  }

  render(){
    return (
       
        <ContainerAdm className="container conteudo-adm">

          {this.state.listaProdutos.map(produtos =>
              <div className="card text-center float-left mb-5" style={{width: '15rem'}}>
              <img className="card-img-top imagens-bolos" src={ipFotos + produtos.foto} alt="Imagem de capa do card"/>
              <div className="card-body">
                <h5 className="card-title nome-bolo-adm">{produtos.nomeProduto}</h5>
                <p className="card-text">{produtos.preco}</p>
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


          {/* */}
        </ContainerAdm>
			
    );
  }
}

export class BoxHomeProfissional extends Component{

  constructor(props){
    super(props)
      this.state={status:''}
  }
  
  render(){
    return (
       
        <div>
          <Header titulo="Área Administrativa"></Header>
          <HomeProfissional codConfeiteiro={this.props.params.codConfeiteiro}></HomeProfissional>
        </div>
			
    );
  }
}

