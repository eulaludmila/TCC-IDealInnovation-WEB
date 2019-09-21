import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import {InputEditarEndereco} from '../global/inputEditarEndereco'

export class AreaEditarCadastro extends Component{
    render(){
        return(
            <ContainerAdm className="container conteudo">
                <form>
                    <div className="form-row mt-5 mr-5 ml-5">
                        <InputEditarEndereco label="CEP:" grupo="form-group col-md-4" tipo="text" classeInput="form-control" id="txt_cep" placeholder="Digite o seu CEP"></InputEditarEndereco>
                        <div className="form-group col-md-1">
                            <label className="lbl_uf">UF:</label>
                            <select id="sl_uf" class="form-control">
                                <option selected>UF</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
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
                            <button type="button" className="btn btn-success btn_salvar">Salvar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
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