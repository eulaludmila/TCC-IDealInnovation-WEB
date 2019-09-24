import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import InputCadastro from '../../FormularioCadastro/InputCadastro/index'
import SelectCategorias from './SelectCategorias/'
import DescricaoProduto from './DescricaoProduto/'
import InputFotoProduto from './InputFotoProduto';
import $ from 'jquery';
import BotaoCadastro from '../../FormularioCadastro/BotaoCadastro';
import { browserHistory} from 'react-router';
import {ModalCadastro} from '../../Modal';


export class CadastrarProdutos extends Component{

    //CONSTRUTOR DECLARANDO OS ESTADOS
    constructor(props){
        super(props);


        this.state={foto: "", tamanhoFoto: "", nomeProduto: '', categoriaProduto:'', qtdeMin: '', qtdeMax: '', precoProduto: '' ,descricaoProduto: '',codCategoria: "", categoria:"", tipo:"", message:"", classMessage:""}
        this.onFocusInput = this.onFocusInput.bind(this);

        this.enviaFormProduto = this.enviaFormProduto.bind(this);
        
    }

    
    /* EVENTOS DOS INPUTS */
    setFoto = (evento) => {
        this.onFocusInput("#img");

        //PEGANDO O ARQUIVO DA FOTO
        let file = evento.target.files[0];

        if(evento.target.files[0].size !== null){
            var tamanho = evento.target.files[0].size;
        }

        //VALIDA O TAMANHO DA FOTO
        if(tamanho < 1048576){

            //SETANDO O ESTADO DA FOTO COM O ARQUIVO
            this.setState({foto: file});
            let reader = new FileReader();

            //PREVIEW DA FOTO
            reader.onloadend = function(){
                $("#img").attr("src", reader.result);
            }

            reader.readAsDataURL(file);
        } else {
            $("#img").css("border", "solid 2px #880e4f");

            var mensagem = "Tamanho máximo para a foto e de 1MB"
            this.erroCaixaVazia(mensagem)
        }
    }

    setNome = (evento) =>{
        this.setState({nomeProduto:evento.target.value});
        this.onFocusInput("#nome");
    }

    setCategoria = (evento) => {
        this.setState({categoriaProduto:evento.target.value})
    }

    setQtdMin = (evento) => {
        this.setState({qtdeMin: evento.target.value});

        this.onFocusInput("#nome");
    }

    setQtdMax = (evento) => {
        this.setState({qtdeMax: evento.target.value});
        this.onFocusInput("#nome");
    }

    setPreco = (evento) => {
        this.setState({precoProduto: evento.target.value});
        this.onFocusInput("#nome");
    }

    setDescricao = (evento) => {
        this.setState({descricaoProduto: evento.target.value});
        this.onFocusInput("#nome");
    }

    //ERROS NOS INPUTS
    erroCaixaVazia(mensagem, id){

        $(id).css('border', '1px solid red');
        this.setState({classMessage: "alert alert-danger"});
        this.setState({message: mensagem});

    }

    //VALIDAÇÃO DOS CAMPOS DOS INPUTS
    verificaCampos = (evento) => {
        evento.preventDefault();
        var mensagem = "";
        var id = "";
        
        if(this.state.nomeProduto.length < 6){
            mensagem = "O campo nome deve conter no mínimo 6 caracteres";
            id = "#nome";

            this.erroCaixaVazia(mensagem, id);
        
        } else if(this.state.qtdeMin.length < 0){
            mensagem = "A quantidade mínima deve ser superior a 0";
            id = "#qtde-min";
            
            this.erroCaixaVazia(mensagem, id);
        
        } else if(this.state.qtdeMax.length < 0){
            mensagem = "A quantidade máxima deve ser superior a 0";
            id = "#qtde-max";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.descricaoProduto.length < 7){
            mensagem = "A descrição deve ter no mínino 7 caracteres";
            id = "#descricao";
            this.setState({erros: [mensagem]});
            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.descricaoProduto.length === 0){
            mensagem = "A descrição é obrigatória";
            id = "#descricao";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.precoProduto.length < 5){
            mensagem = "O preço é obrigatório";
            id = "#descricao";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.qtdeMin.length > this.state.qtdeMax.length){
            mensagem = "A quantidade máxima deve ser maior que a quantidade mínima";
            id = "#qtde-max";
           
            this.setState({erros: [mensagem]});
            this.erroCaixaVazia(mensagem, id);
        } else {
            this.enviaFormProduto();
        }


    }

    //MÉTODO QUE IRÁ SALVAR OS DADOS DO PRODUTO 
    enviaFormProduto(){

        let json = {
            nomeProduto: this.state.nomeProduto,
            descricao: this.state.descricaoProduto,
            foto: "teste",
            confeiteiro: {codConfeiteiro: JSON.parse(sessionStorage.getItem("dados"))},
            categoria: {codCategoria: this.state.categoriaProduto},
            quantidade: {multiplo: parseInt(this.state.qtdeMin), maximo: parseInt(this.state.qtdeMax)},
            preco: parseFloat(this.state.precoProduto),
            status: 1
        }

        this.setState({json: json});

        $.ajax({
            url: "http://localhost:8080/produto",
            contentType: "application/json",
            dataType: "json",
            type: "post",
            data: JSON.stringify(json),
            success: function(resposta){
                this.setState({nomeProduto:""});
                this.setState({descricaoProduto:""});
                this.setState({qtdeMin:""});
                this.setState({qtdeMax:""});
                this.setState({precoProduto:""});
                this.enviaFormFotoProduto(resposta.codProduto);

            
            }.bind(this)

            
        })

    }

    enviaFormFotoProduto = (codProduto) =>{

        
        //PEGA O ARQUIVO DA FOTO E SALVA JUNTO COM O CODIGO DO PRODUTO
        var formDados= new FormData();
        formDados.append('foto', this.state.foto);
        formDados.append('codProduto', codProduto);

        $.ajax({
            url: 'http://localhost:8080/foto/produto',
            data: formDados,
            processData: false,
            contentType: false,
            type: 'post',
            success: function(data) 
            {
                this.cadastroRealizado();
            }.bind(this)
        });
    }

    cadastroRealizado=()=>{
        //ABRIR A MODAL DE CADASTRO REALIZADO
        $('#my-modal').modal('show');
                    
        //AO APERTAR EM "OK" IRÁ REDIRECIONAR PARA A TELA INCIAL DO SITE
        $(".btn-modal").on("click", function(){
            browserHistory.push("/adm/profissional/produtos_cadastrados")
        });
    }



    //TIRAR OS ERROS AO DIGITAR NOS INPUTS
    onFocusInput(id){
        this.setState({message:""});
        this.setState({classMessage:""});
        $(id).css('border', '1px solid #ced4da');

    }

    render(){
        return(
            <ContainerAdm className="container conteudo">

                <ModalCadastro></ModalCadastro>

                <div className={this.state.classMessage} role="alert">
                    <h6 className="text-center">{this.state.message}</h6>
                </div>
                
                <form className="col-md-12 cadastro-produto centralizar">
                    <div className="row">
                        <div className="col-5">
                            <InputCadastro className="form-group" id="nome" type="text" placeholder="Digite o nome do produto..." label="Nome" onChange={this.setNome}></InputCadastro>
                            <SelectCategorias id="categoria" onChange={this.setCategoria}></SelectCategorias>

                            <div className="form-row">
                                <InputCadastro className="form-group col-md-4" id="qtde-min" type="number" placeholder="1" label="Qtd. Mínima" onChange={this.setQtdMin}></InputCadastro>
                                <InputCadastro className="form-group col-md-4" id="qtde-max" type="number" placeholder="10" label="Qtd. Máxima" onChange={this.setQtdMax}></InputCadastro>
                                <InputCadastro className="form-group col-md-4" id="preco" type="text" placeholder="Ex.: R$0,00" label="Preço" onChange={this.setPreco}></InputCadastro>
                            </div>

                            <DescricaoProduto className="form-group" id="descricao" label="Descrição" onChange={this.setDescricao}></DescricaoProduto>
                           
                        </div>
                        <div className="col-7">

                            <InputFotoProduto idImg="img" className="form-group" src={this.state.foto} id="foto" type="file" label="Foto do Produto" onChange={this.setFoto}></InputFotoProduto>

                        </div>
                    </div>

                    <BotaoCadastro to="" type="submit" onClick={this.verificaCampos} id="Salvar"></BotaoCadastro>
                    <BotaoCadastro to="" type="submit" onClick={this.verificaCampos} id="Cancelar"></BotaoCadastro>
                </form>

            </ContainerAdm>

        )
    }
}

export class BoxCadastrarProdutos extends Component{
    render(){
        return(
            <div>
                <Header titulo="Cadastro de Produto"></Header>
                <CadastrarProdutos></CadastrarProdutos>
            </div>
        )
    }
}