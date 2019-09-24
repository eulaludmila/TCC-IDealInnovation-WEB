import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import {InputEditarEndereco} from '../global/inputEditarEndereco'
import {BotaoEditarEndereco} from '../global/BotaoEditarEndereco'
import $ from 'jquery';


//Classe da áre de Editar endereço do confeiteiro
export class AreaEditarCadastro extends Component{

    //CONSTRUTOR QUE DECLARA OS ESTADOS
    constructor(props){
        super(props);
        this.state={cep:'',uf:'',numero:'',complemento:'',rua:'',bairro:'',cidade:''};

        this.enviarFormEditarEndereco = this.enviarFormEditarEndereco.bind(this);
    }

    //EVENTOS DOS INPUTS
    setCep = (evento) => {
        console.log(evento.target.value);
        this.setState({cep:evento.target.value});
        this.onFocusInput("#cep");

        $("#cep").mask("00000-000");
        this.verificaCep(this.state.cep);
    }

    //VALIDAÇÃO DOS CAMPOS DOS INPUTS
    verificaCampos = (evento) => {
        evento.preventDefault();
        var mensagem = "";
        var id = "";

        if(this.state.cep.length < 9){
            mensagem = "CEP inválido";
            id = '#cep';
            this.erroCaixaVazia(mensagem,id);
        }else if(this.state.numero.length === 0){
            mensagem = "Prencha o campo numero";
            id = "#numero";
            this.erroCaixaVazia(mensagem,id);
        }else{
            this.enviarFormEndereco();
        }

    }

    //ERROS NOS INPUTS
    erroCaixaVazia(mensagem,id){

        $(id).css('border', '1px solid red');
        this.setState({classMessage: "alert alert-danger"});
        this.setState({message: mensagem});
        
    }

    //TIRAR OS ERROS AO DIGITAR NOS INPUTS
    onFocusInput = (id) => {
        this.setState({message:""});
        this.setState({classMessage:""});

        //COLOCANDO UMA BORDA VERMELHA NO INPUT
        $(id).css('border', '1px solid #ced4da');
        
    }

    verificaCep = () => {
        
        //VÁRIAVEL PARA PEGAR O VALOR DO CEP
        var cep = $("#cep").val();

        console.log(cep.length);

        //VERIFICANDO SE O CEP É VÁLIDO, SENDO COM 9 NÚMEROS
        if(cep.length === 9){

            //REQUISIÇÃO
            $.ajax({
            
                url:`http://viacep.com.br/ws/${cep}/json/?callback=?`,
                dataType:"json",
                
                success: function(resposta){
                    console.log(resposta.uf);

                    //SE NÃO DE ERROR IRÁ MUDAR O ESTADO DOS COMPONENTES
                    if(!resposta.erro){

                        // this.setState({logradouro: resposta.logradouro})
                        // this.setState({bairro:resposta.bairro})
                        // this.setState({cidade:resposta.localidade})
                        // this.setState({estado:resposta.uf})

                    }else{
                        alert("CEP não encontrado");
                    }
                          
                }.bind(this)

            });
        }

    }

    render(){
        return(
            <ContainerAdm className="container conteudo">
                <form>
                    <div className="form-row mt-5 mr-5 ml-5">
                        <InputEditarEndereco label="CEP:" grupo="form-group col-md-4" tipo="text" classeInput="form-control" id="cep" placeholder=". . ."></InputEditarEndereco>
                        <InputEditarEndereco label="UF:" disabled="disabled" grupo="form-group col-md-1" tipo="text" classeInput="form-control" id="uf"  placeholder=". . ."></InputEditarEndereco>
                        <InputEditarEndereco label="Número" disabled="disabled" grupo="form-group col-md-3" tipo="number" classeInput="form-control" id="numero"  placeholder=". . ."></InputEditarEndereco>
                        <InputEditarEndereco label="Complemento:" grupo="form-group col-md-4" tipo="text" classeInput="form-control" id="complemento"  placeholder="Ex: Casa"></InputEditarEndereco>
                    </div>
                    <div className="form-row mr-5 ml-5">
                        <InputEditarEndereco label="Endereço:" disabled="disabled" grupo="form-group col-md-12" tipo="text" classeInput="form-control" id="rua" placeholder=". . ."></InputEditarEndereco>
                    </div>
                    <div className="form-row mr-5 ml-5">
                        <InputEditarEndereco label="Bairro:" disabled="disabled" grupo="form-group col-md-6" tipo="text" classeInput="form-control" id="bairro" placeholder=". . ."></InputEditarEndereco>
                        <InputEditarEndereco label="Cidade:" disabled="disabled" grupo="form-group col-md-6" tipo="text" classeInput="form-control" id="cidade" placeholder=". . ."></InputEditarEndereco>
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