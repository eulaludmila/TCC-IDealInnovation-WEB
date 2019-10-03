import React, {Component} from 'react';
import img from '../../../img/bolo.jpg'
// import '../../../css/font/all.css'
import {Link} from 'react-router';
import { ipAPI } from '../../../link_config';
import $ from 'jquery';

class Menu extends Component{

    //CONSTRUTOR DECLARANDO OS ESTADOS
     constructor(props){
        super(props);

        this.state = {listaProdutos: []};

    }

    componentDidMount(){
        $.ajax({
            url: ipAPI + "confeiteiro/" + sessionStorage.getItem("key"),
            dataType: "json",
            type: "get",
            success: function(resposta){
                this.setState({listaProdutos: resposta});
                console.log(resposta)
            }.bind(this)
        })
    }

  render(){
    return (
      <div >
        <div className="embaixo">

        </div>
        <div id="segura_tudo" className="centralizar">
        {/* <!-- Menu vertical  --> */}
            <ul id="accordion" className="accordion">
                <li>
                    <div className="caixa_imagem_confeiteiro">
                        <div className="imagem_confeiteiro">
                            <img src={"http://54.242.6.253" + this.state.listaProdutos.foto} alt="Foto" title="Foto" className="imagem_confeiteiro" style={{width:'100%',height:'100%'}}></img>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="link"><i className="fas fa-user-alt"></i>{this.state.listaProdutos.nome + " " + this.state.listaProdutos.sobrenome}</div>
                </li>
                <li>
                    <div className="link"><i className="fas fa-user-edit"></i>Seus dados<i className="fa fa-chevron-down"></i></div>
                    <ul className="submenu" id="subDados">
                        <Link to="/adm/profissional/editar_dados_pessoais"><li>Dados pessoais</li></Link>
                        <Link to="/adm/profissional/editar_endereco"><li>Endereço</li></Link>
                        <Link to="/adm/profissional/email"><li>E-mail</li></Link>
                        <Link to="/adm/profissional/senha"><li>Senha</li></Link>
                    </ul>
                </li>
                <li>
                    <div className="link"><i className="fas fa-shopping-cart"></i>Produtos<i className="fa fa-chevron-down"></i></div>
                    <ul className="submenu">
                        <Link to="/adm/profissional/produtos_cadastrados"><li>Seus produtos</li></Link>
                        <Link to="/adm/profissional/cadastro_produtos"><li>Cadastrar produtos</li></Link>
                    </ul>
                </li>
                <li><div className="link"><i className="fas fa-shopping-basket"></i>Pedidos<i className="fa fa-chevron-down"></i></div>
                    <ul className="submenu" id="subDados">
                        <Link to="/adm/profissional/solicitacoes_pedidos"><li>Solicitação de Pedidos</li></Link>
                        <Link to="/adm/profissional/pedidos_aprovados"><li>Pedidos Aprovados</li></Link>
                    </ul>
                </li>
                <li id="hs_cms"><Link to="/adm/profissional"><div className="link"><i className="fas fa-home"></i>Home</div></Link>

                </li>
                <li><div className="link"><i className="fas fa-sign-out-alt"></i>Sair</div>

                </li>
            </ul>
            
        </div>
      </div>
    );
  }
}

export default Menu;
