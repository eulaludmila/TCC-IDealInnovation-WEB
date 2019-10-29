import React, {Component} from 'react';
import img from '../../../img/bolo.jpg'
// import '../../../css/font/all.css'
import {Link} from 'react-router';
import {ipAPI, ipFotos} from '../../../link_config';
import axios from 'axios';


class Menu extends Component{

    //CONSTRUTOR DECLARANDO OS ESTADOS
     constructor(props){
        super(props);

        this.state = {listaProdutos: [], img:''};

    }

    componentDidMount(){
        axios.get(`${ipAPI}confeiteiro/`+this.props.codConfeiteiro,{headers: {'Authorization': sessionStorage.getItem('auth')}})
        .then(resposta => {
            console.log(resposta)

            const dados = resposta.data;

            this.setState({listaProdutos: dados});
                if(dados.foto !== null){

                    this.setState({img: ipFotos + dados.foto});
                }else{
                    this.setState({img: img});
                }
            
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
                            <img src={this.state.img} alt="Foto" title="Foto" className="imagem_confeiteiro" style={{'width':'100%','height':'100%'}}></img>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="link"><i className="fas fa-user-alt"></i>{this.state.listaProdutos.nome + " " + this.state.listaProdutos.sobrenome}</div>
                </li>
                <li>
                    <div className="link"><i className="fas fa-user-edit"></i>Seus dados<i className="fa fa-chevron-down"></i></div>
                    <ul className="submenu" id="subDados">
                        <Link to={"/adm/profissional/editar_dados_pessoais/" + this.props.codConfeiteiro}><li>Dados pessoais</li></Link>
                        <Link to={"/adm/profissional/editar_endereco/" + this.props.codConfeiteiro}><li>Endereço</li></Link>
                        <Link to={"/adm/profissional/email/" + this.props.codConfeiteiro}><li>E-mail</li></Link>
                        <Link to={"/adm/profissional/senha/" + this.props.codConfeiteiro}><li>Senha</li></Link>
                    </ul>
                </li>
                <li>
                    <div className="link"><i className="fas fa-shopping-cart"></i>Produtos<i className="fa fa-chevron-down"></i></div>
                    <ul className="submenu">
                        <Link to={"/adm/profissional/produtos/" + this.props.codConfeiteiro}><li>Seus produtos</li></Link>
                        <Link to={"/adm/profissional/cadastro_produtos/" + this.props.codConfeiteiro}><li>Cadastrar produtos</li></Link>
                    </ul>
                </li>
                <li><div className="link"><i className="fas fa-shopping-basket"></i>Pedidos<i className="fa fa-chevron-down"></i></div>
                    <ul className="submenu" id="subDados">
                        <Link to={"/adm/profissional/solicitacoes_pedidos/" + this.props.codConfeiteiro}><li>Solicitação de Pedidos</li></Link>
                        <Link to={"/adm/profissional/pedidos_aprovados/"+ this.props.codConfeiteiro}><li>Pedidos Aprovados</li></Link>
                    </ul>
                </li>
                <li id="hs_cms"><Link to={"/adm/profissional" + this.props.codConfeiteiro}><div className="link"><i className="fas fa-home"></i>Home</div></Link>

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
