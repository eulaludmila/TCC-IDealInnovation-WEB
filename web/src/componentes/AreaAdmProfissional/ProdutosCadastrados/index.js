import React, {Component} from 'react';
import img from '../../../img/bolo.jpg'
import lupa from '../../../img/lupa.png'
import Header from '../Header'
import {ContainerAdm} from '../../../styles'
import $ from 'jquery'
import {ipAPI, ipFotos} from '../../../link_config';
import {Link} from 'react-router';

export class ProdutosCadastrados extends Component{


    //CONSTRUTOR DECLARANDO OS ESTADOS
    constructor(props){
        super(props);

        this.state = {listaProdutos: [], ativoDesativo: "", classAtivoDesativo:""};

    }

    componentDidMount(){

        // const { codProduto } = this.props.match.params
        $.ajax({
            url: ipAPI + "produto/confeiteiro/" + sessionStorage.getItem("key"),
            dataType: "json",
            type: "get",
            success: function(resposta){
                this.setState({listaProdutos: resposta});

                if(this.state.listaProdutos.status === false){
                    this.setState({ativoDesativo: "Ativar"});
                    this.setState({classAtivoDesativo: "btn-success"});
                } else {
                    this.setState({ativoDesativo: "Desativar"});
                    this.setState({classAtivoDesativo: "btn-danger"});
                }
            }.bind(this)
        })
    }

    atualizarListagemProdutos(novalista){
        this.setState({listaProdutos: novalista});
    }

    ativarDesativarProduto(codProduto){

        $.ajax({
            url: ipAPI + "produto/status/" + codProduto,
            dataType: "json",
            type: "put",
            success: function(resposta){

                if(resposta.status === false){
                    this.setState({ativoDesativo: "Ativar"});
                    this.setState({classAtivoDesativo: "btn-success"});
                } else {
                    this.setState({ativoDesativo: "Desativar"});
                    this.setState({classAtivoDesativo: "btn-danger"});
                }
            }.bind(this)
        })
    }

  render(){
    return (
       
        <ContainerAdm className="container conteudo-adm">

            {this.state.listaProdutos.map(produtos =>
                
                <div className="card mb-3 mr-3 float-left" style={{maxWidth: '540px'}}>
                    <div className="row no-gutters">
                        <div className="col-md-5">
                        <img src={"http://54.242.6.253" + produtos.foto} title={produtos.nomeProduto} style={{width: '100%',height:'210px'}} className="card-img" alt={produtos.nomeProduto}/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title titulo-produto-adm" >{produtos.nomeProduto}</h5>
                                <p className="card-text mb-5">{produtos.descricao}</p>
                                <div className="botao-centro">
                                    <Link to={"/adm/profissional/cadastro_produtos/" + produtos.codProduto}><button className="btn btn-warning mr-2">Editar</button></Link>
                                    <button className="btn btn-dark  mr-2 "><img src={lupa} alt="..."></img></button>
                                    <input type="button" className={"btn " + this.state.classAtivoDesativo} onClick={() => this.ativarDesativarProduto(produtos.codProduto)} value={this.state.ativoDesativo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                )}

            

        </ContainerAdm>
			
    );
  }
}

export class BoxCadastroProdutos extends Component{
    render(){
      return (
         <div>
             <Header titulo="Seus Produtos"></Header>
            <ProdutosCadastrados></ProdutosCadastrados>
         </div>
          
              
      );
    }
  }

