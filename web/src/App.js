import React, { Component } from 'react';
import { Rota } from './Rota';
import 'jquery-mask-plugin/dist/jquery.mask';
import './css/bootstrap.min.css';
import './css/pure-min.css';
import './componentes/Conteudo/EntrarCadastrar/css/entrarCadastrar.css'
class App extends Component {
  render(){
    return (
      <div>
        {/* <LoginCliente></LoginCliente> */}
        {/* <LoginProfissional></LoginProfissional> */}
        {/* <Home></Home> */}
        {/* {this.props.children} */}
        {/* <div className="entrar"></div> */}
        <Rota></Rota>
      </div>
    );
  }
}

export default App;
