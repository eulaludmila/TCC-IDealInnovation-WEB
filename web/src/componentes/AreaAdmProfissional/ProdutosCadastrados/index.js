import React, {Component} from 'react';
import img from '../../../img/bolo.jpg'
import lupa from '../../../img/lupa.png'
import Header from '../Header'
import {ContainerAdm} from '../../../styles'
import $ from 'jquery'
import axios from 'axios'
import {ipAPI,ipFotos} from '../../../link_config';
import {Link} from 'react-router';

export class ProdutosCadastrados extends Component{


    //CONSTRUTOR DECLARANDO OS ESTADOS
    constructor(props){
        super(props);

        this.state = {listaProdutos: [], ativoDesativo: "", classAtivoDesativo:""};

    }

    componentDidMount(){

        axios.get(`${ipAPI}produto/confeiteiro/`+this.props.codConfeiteiro,{headers: {'Authorization': sessionStorage.getItem('auth')}})
        .then(resposta => {
            
            const dados = resposta.data;

            this.setState({listaProdutos: dados});

                if(this.state.listaProdutos.status === false){
                    this.setState({ativoDesativo: "Ativar"});
                    this.setState({classAtivoDesativo: "btn-success"});
                } else {
                    this.setState({ativoDesativo: "Desativar"});
                    this.setState({classAtivoDesativo: "btn-danger"});
                }

        }).catch((err) => {console.log("AXIOS ERROR: ", err);})

        // const { codProduto } = this.props.match.params
        // $.ajax({
        //     url: ipAPI + "produto/confeiteiro/" + this.props.codConfeiteiro,
        //     dataType: "json",
        //     type: "get",
        //     success: function(resposta){
        //         this.setState({listaProdutos: resposta});

        //         if(this.state.listaProdutos.status === false){
        //             this.setState({ativoDesativo: "Ativar"});
        //             this.setState({classAtivoDesativo: "btn-success"});
        //         } else {
        //             this.setState({ativoDesativo: "Desativar"});
        //             this.setState({classAtivoDesativo: "btn-danger"});
        //         }
        //     }.bind(this)
        // })
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
                
                <div key={produtos.codProduto} className="card mb-3 mr-3 float-left" style={{maxWidth: '540px'}}>
                    <div className="row no-gutters">
                        <div className="col-md-5">
                        <img src={ipFotos + produtos.foto} title={produtos.nomeProduto} style={{width: '100%',height:'210px'}} className="card-img" alt={produtos.nomeProduto}/>
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

    constructor(props){
        super(props)
        this.state = {status:''}
    }

    render(){
      return (
         <div>
             <Header titulo="Seus Produtos"></Header>
            <ProdutosCadastrados codConfeiteiro={this.props.params.codConfeiteiro}></ProdutosCadastrados>
         </div>
          
              
      );
    }
  }

