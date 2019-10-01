import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import {InputEditarEndereco} from '../global/inputEditarEndereco'
import {BotaoEditarEndereco} from '../global/BotaoEditarEndereco'
import { browserHistory} from 'react-router';
import {ModalCadastro} from '../../Modal';
import $ from 'jquery';


//Classe da áre de Editar endereço do confeiteiro
export class AreaEditarCadastro extends Component{

    //CONSTRUTOR QUE DECLARA OS ESTADOS
    constructor(props){
        super(props);
        this.state={cep:'',uf:'',numero:'',complemento:'',endereco:'',bairro:'',cidade:'', classMessage:'', message:''};

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

    setEndereco = (evento) =>{
        console.log(evento.target.value);
        this.setState({endereco:evento.target.value});
        this.onFocusInput("#endereco");
    }

    setBairro = (evento) =>{
        this.setState({bairro:evento.target.value});
        this.onFocusInput("#bairro")
    }

    setComplemento = (evento) => {
        this.setState({complemento:evento.target.value});
    }

    setNumero = (evento) => {
        this.setState({numero:evento.target.value});
        this.onFocusInput("#numero");
        $("#cep").mask("0000000");
    }

    setUf = (evento) => {
        this.setState({uf:evento.target.value});
        this.onFocusInput("#uf");
    }

    setCidade = (evento) => {
        console.log(evento.target.value);
        this.setState({cidade:evento.target.value});
        this.onFocusInput("#cidade");
    }


    enviarForm(json){
        // evento.preventDefault();

        console.log(json)
        $.ajax({
            url: 'http://54.242.6.253:8080/endereco/' + sessionStorage.getItem("dados"),
            contentType: 'application/json',
            dataType: 'json',
            type: 'put',
            data: JSON.stringify(json),
            success:function(resposta){
                this.atualizacaoRealizada();
            }.bind(this),
            
        });
    }

    atualizacaoRealizada = () =>{
        //ABRIR A MODAL DE CADASTRO REALIZADO
        $('#my-modal').modal('show');
                    
        $(".btn-modal").on("click", function(){
            browserHistory.push("/adm/profissional/editar_endereco")
        });
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
            this.enviarFormEditarEndereco();
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
                        
                        this.setState({uf:resposta.uf})
                        this.setState({cidade:resposta.localidade})
                        this.setState({bairro:resposta.bairro})
                        this.setState({endereco:resposta.logradouro})

                    }else{
                        alert("CEP não encontrado");
                    }
                          
                }.bind(this)

            });
        }

    }

    enviarFormEditarEndereco(){
        let json = {endereco: this.state.endereco,
            numero: this.state.numero,
            complemento: this.state.complemento,
            bairro: this.state.bairro,
            cidade:{cidade:this.state.cidade,estado:{uf:this.state.uf},},
            cep: this.state.cep};

            sessionStorage.setItem('endereco', JSON.stringify(json));

            this.enviarForm(json);

    }

    render(){
        return(
            <ContainerAdm className="container conteudo">

                <ModalCadastro nome="Atualização efetuada com sucesso!!"></ModalCadastro>

                <form>
                    <div className="form-row mt-5 mr-5 ml-5">
                        <InputEditarEndereco label="CEP:" grupo="form-group col-md-4" tipo="text" classeInput="form-control" id="cep" onChange={this.setCep} value={this.state.cep} placeholder=". . ."></InputEditarEndereco>
                        <InputEditarEndereco label="UF:" disabled="disabled" grupo="form-group col-md-1" tipo="text" classeInput="form-control" id="uf" onChange={this.setUf} value={this.state.uf} ></InputEditarEndereco>
                        <InputEditarEndereco label="Número" grupo="form-group col-md-3" tipo="number" classeInput="form-control" id="numero" onChange={this.setNumero} value={this.state.numero} placeholder=". . ."></InputEditarEndereco>
                        <InputEditarEndereco label="Complemento:" grupo="form-group col-md-4" tipo="text" classeInput="form-control" id="complemento" onChange={this.setComplemento} value={this.state.complemento} placeholder="Ex: Casa"></InputEditarEndereco>
                    </div>
                    <div className="form-row mr-5 ml-5">
                        <InputEditarEndereco label="Endereço:" disabled="disabled" grupo="form-group col-md-12" tipo="text" classeInput="form-control" id="endereco" onChange={this.setEndereco} value={this.state.endereco} placeholder=". . ."></InputEditarEndereco>
                    </div>
                    <div className="form-row mr-5 ml-5">
                        <InputEditarEndereco label="Bairro:" disabled="disabled" grupo="form-group col-md-6" tipo="text" classeInput="form-control" id="bairro" onChange={this.setBairro} value={this.state.bairro} placeholder=". . ."></InputEditarEndereco>
                        <InputEditarEndereco label="Cidade:" disabled="disabled" grupo="form-group col-md-6" tipo="text" classeInput="form-control" id="cidade" onChange={this.setCidade} value={this.state.cidade} placeholder=". . ."></InputEditarEndereco>
                    </div>
                    <div className="form-row">
                        <div className="form-group mt-5 centralizar">
                            <BotaoEditarEndereco onClick={this.verificaCampos} id="Salvar" tipo="button" classe="btn btn-success btn_salvar"></BotaoEditarEndereco>
                            <BotaoEditarEndereco id="Cancelar" tipo="button" classe="btn btn-danger"></BotaoEditarEndereco>
                        </div>
                    </div>
                </form>
            </ContainerAdm>
        );
    }
}

export class BoxEditarEndereco extends Component{

    constructor(){
        super();
        this.state = {endereco: []};
        this.atualizarEnderecoAtual = this.atualizarEnderecoAtual.bind(this);
    }

    componentDidMount(){
        $.ajax({
            url: 'http://localhost:8080/enderecoconfeiteiro',
            dataType: 'json',
            success:function(resposta){
                this.setState({endereco:resposta});
            }.bind(this),
            error:function(resposta){
                console.log(resposta);
            }
        });
    }

    atualizarEnderecoAtual(novoEndereco){
        this.setState({endereco:novoEndereco});
    }

    render(){
        return(
            <div>
                <Header titulo="Configurações de Endereço"></Header>
                <AreaEditarCadastro atualizarEndereco={ this.atualizarEnderecoAtual }></AreaEditarCadastro>
            </div>
        );
    }
}