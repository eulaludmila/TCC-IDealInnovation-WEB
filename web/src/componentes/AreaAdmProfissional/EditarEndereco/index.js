import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import {InputEditarEndereco} from '../global/inputEditarEndereco'
import {BotaoEditarEndereco} from '../global/BotaoEditarEndereco'
import {SelectUfEditarEndereco} from './SelectUfEditarEndereco'

export class AreaEditarCadastro extends Component{
    render(){
        return(

            
            <ContainerAdm className="container conteudo">
                <form>
                    <div className="form-row mt-5 mr-5 ml-5">
                        <InputEditarEndereco label="CEP:" grupo="form-group col-md-4" tipo="text" classeInput="form-control" id="txt_cep" placeholder="Digite o seu CEP"></InputEditarEndereco>
                        <SelectUfEditarEndereco id="sl_uf"></SelectUfEditarEndereco>
                        <InputEditarEndereco label="Número" grupo="form-group col-md-3" tipo="number" classeInput="form-control" id="txt_numero"  placeholder="Digite seu número"></InputEditarEndereco>
                        <InputEditarEndereco label="Complemento:" grupo="form-group col-md-4" tipo="text" classeInput="form-control" id="txt_complemento"  placeholder="Ex: Casa"></InputEditarEndereco>
                    </div>
                    <div className="form-row mr-5 ml-5">
                        <InputEditarEndereco label="Endereço:" grupo="form-group col-md-12" tipo="text" classeInput="form-control" id="txt_rua" placeholder="Digite o seu endereço"></InputEditarEndereco>
                    </div>
                    <div className="form-row mr-5 ml-5">
                        <InputEditarEndereco label="Bairro:" grupo="form-group col-md-6" tipo="text" classeInput="form-control" id="txt_bairro" placeholder="Digite o seu bairro"></InputEditarEndereco>
                        <InputEditarEndereco label="Cidade:" grupo="form-group col-md-6" tipo="text" classeInput="form-control" id="txt_cidade" placeholder="Digite a sua cidade"></InputEditarEndereco>
                    </div>
                    <div className="form-row">
                        <div className="form-group mt-5 centralizar">
                            <BotaoEditarEndereco id="Salvar" tipo="button" classe="btn btn-success btn_salvar"></BotaoEditarEndereco>
                            <BotaoEditarEndereco id="Cancelar" tipo="button" classe="btn btn-danger"></BotaoEditarEndereco>
                        </div>
                    </div>
                </form>
            </ContainerAdm>
        );
    }
}

export class BoxEditarEndereco extends Component{
    render(){
        return(
            <div>
                <Header titulo="Configurações de Endereço"></Header>
                <AreaEditarCadastro></AreaEditarCadastro>
            </div>
        );
    }
}