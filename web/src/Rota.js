import React from 'react';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import Home from './componentes/Conteudo/Home';
import Site from './componentes/Rota/Site';
import Cadastro from './componentes/Rota/Cadastro';
import Login from './componentes/Rota/Login';

import EntrarLogin from './componentes/Conteudo/EntrarCadastrar/Entrar';
import CadastrarLogin from './componentes/Conteudo/EntrarCadastrar/Cadastrar';

import CadastroCliente from './componentes/FormularioCadastro/CadastroCliente';
import CadastroProfissional from './componentes/FormularioCadastro/CadastroProfissional';
import CadastroProfissionalEndereco from './componentes/FormularioCadastro/CadastroProfissional/CadastroEndereco';
import CadastroProfissionalFoto from './componentes/FormularioCadastro/CadastroProfissional/CadastroFoto';

import LoginCliente from './componentes/Login/LoginCliente';
import LoginProfissional from './componentes/Login/LoginProfissional';

import AdmProfissional from './componentes/Rota/AdmProfissional'
import { BoxHomeProfissional } from './componentes/AreaAdmProfissional/HomeProfissional'
import { BoxCadastroProdutos } from './componentes/AreaAdmProfissional/ProdutosCadastrados'

export const Rota = () =>(
    <Router history={browserHistory} >
        <Route path="/" component={Site}>

            <IndexRoute component={Home}></IndexRoute>
            <Route path="/entrar" component={EntrarLogin}></Route>
            <Route path="/cadastrar" component={CadastrarLogin}></Route>
            <Route path="/entrarCliente" component={LoginCliente}></Route>
            <Route path="/entrarProfissional" component={LoginProfissional}></Route>

        </Route>
        <Route path="/cadastro" component={Cadastro}>
            
            <Route path="/cadastro/cliente" component={CadastroCliente}></Route>
            <Route path="/cadastro/profissional" component={CadastroProfissional}></Route>
            <Route path="/cadastro/profissional/endereco" component={CadastroProfissionalEndereco}></Route>
            <Route path="/cadastro/profissional/foto" component={CadastroProfissionalFoto}></Route>

        </Route>
        <Route path="/login" component={Login}>

            <Route path="/login/cliente" component={LoginCliente}></Route>
            <Route path="/login/profissional" component={LoginProfissional}></Route>

        </Route>
        <Route path="/adm/profissional" component={AdmProfissional}>

            <IndexRoute component={BoxHomeProfissional}></IndexRoute>
            <Route path="/adm/profissional/produtos_cadastrados" component={BoxCadastroProdutos}></Route>
            {/* <Route path="/login/profissional" component={LoginProfissional}></Route> */}

        </Route>
    </Router>
)