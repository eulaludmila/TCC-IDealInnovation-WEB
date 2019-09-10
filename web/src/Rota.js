import React from 'react';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import Home from './componentes/Conteudo/Home';
import EntrarLogin from './componentes/Conteudo/EntrarCadastrar/Entrar';
import CadastrarLogin from './componentes/Conteudo/EntrarCadastrar/Cadastrar';
import CadastroCliente from './componentes/FormularioPrimeiroCadastro/CadastroCliente';
import CadastroProfissional from './componentes/FormularioPrimeiroCadastro/CadastroProfissional';
import CadastroProfissionalEndereco from './componentes/FormularioPrimeiroCadastro/CadastroProfissional/CadastroEndereco';
import CadastroProfissionalFoto from './componentes/FormularioPrimeiroCadastro/CadastroProfissional/CadastroFoto';
import LoginCliente from './componentes/Login/LoginCliente';
import LoginProfissional from './componentes/Login/LoginProfissional';

export const Rota = () =>(
    <Router history={browserHistory} >
        <Route path="/" /*component={App}*/>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/entrar" component={EntrarLogin}></Route>
            <Route path="/cadastrar" component={CadastrarLogin}></Route>
            <Route path="/cadastroCliente" component={CadastroCliente}></Route>
            <Route path="/cadastroProfissional" component={CadastroProfissional}></Route>
            <Route path="/cadastroProfissionalEndereco" component={CadastroProfissionalEndereco}></Route>
            <Route path="/entrarCliente" component={LoginCliente}></Route>
            <Route path="/entrarProfissional" component={LoginProfissional}></Route>
            <Route path="/cadastroProfissionalFoto" component={CadastroProfissionalFoto}></Route>
        </Route>
    </Router>
)