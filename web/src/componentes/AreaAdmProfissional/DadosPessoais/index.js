import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import {InputEditarDados} from '../global/InputEditarDados'
import {BotaoEditarDados} from '../global/BotaoEditarDados'
import {SelectDadosPessoais} from './SelectSexoDadosPessoais'

export class AreaEditarDadosPessoais extends Component{
    render(){
        return(
            <ContainerAdm className="container conteudo">
                <form>
                    <div id="caixa_imagem" className="centralizar">
                        <div className="imagem_confeiteiro">

                        </div>
                        <InputEditarDados classe="input_imagem" tipo="file" classeInput="form-control-file" id="exampleFormControlFile1"></InputEditarDados>
                    </div>
                    <div className="form-row mt-5">
                        <InputEditarDados classe="form-group col-md-4" label="Nome:" tipo="text" classeInput="form-control" id="txt_nome" placeholder="Digite o seu nome"></InputEditarDados>
                        <InputEditarDados classe="form-group col-md-4" label="Sobrenome:" tipo="text" classeInput="form-control" id="txt_sobrenome" placeholder="Digite o seu sobrenome"></InputEditarDados>
                        <InputEditarDados classe="form-group col-md-4" label="Celular:" tipo="text" classeInput="form-control" id="txt_celular" placeholder="(00) 00000-0000"></InputEditarDados>
                    </div>
                    <div className="form-row">
                        <SelectDadosPessoais id="sl_sexo"></SelectDadosPessoais>
                        
                        <InputEditarDados classe="form-group col-md-4" disable="disable" label="CPF:" tipo="text" classeInput="form-control" id="txt_cpf" desabilitado="disabled"></InputEditarDados>
                        <InputEditarDados classe="form-group col-md-4" label="Data de Nascimento::" tipo="text" classeInput="form-control" id="txt_dt_nasc" placeholder="00/00/0000"></InputEditarDados>
                        
                        <div className="form-group mt-5 centralizar">
                        <BotaoEditarDados id="Salvar" tipo="button" classe="btn btn-success btn_salvar"></BotaoEditarDados>
                        <BotaoEditarDados  id="Salvar" tipo="button" classe="btn btn-danger"></BotaoEditarDados>
                        </div>
                    </div>
                </form>
            </ContainerAdm>
        );
    }
}

export class BoxEditarDadosPessoais extends Component{
    render(){
        return(
            <div>
                <Header titulo="Configurações dados pessoais"></Header>
                <AreaEditarDadosPessoais></AreaEditarDadosPessoais>
            </div>
        );
    }
}