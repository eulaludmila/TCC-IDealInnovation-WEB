import React, {Component} from 'react';
import '../css/cadastro.css';
import img from '../../../img/user3.png'
import InputCadastro from '../InputCadastro'
import SelectSexoCadastro from '../SelectSexoCadastro'
import BotaoCadastro from '../BotaoCadastro'

import '../../../css/bootstrap.min.css'
import $ from 'jquery';
import { browserHistory} from 'react-router';


//CLASSE RESPONSÁVEL PELO CADASTRO DO CLIENTE
class CadastroProfissional extends Component{

    //CONSTRUTOR DECLARANDO OS ESTADOS
    constructor(props){
        super(props);
        this.state={ nome:'',sobrenome:'',dtNasc:'',celular:'',cpf:'',sexo:'',email:'',senha:'',confirmSenha:'',foto:"", imgFoto:`${img}`,message:"", classMessage:""};
        
        this.enviaFormConfeiteiro = this.enviaFormConfeiteiro.bind(this);
        this.erroCaixaVazia = this.erroCaixaVazia.bind(this);
        this.onFocusInput = this.onFocusInput.bind(this);
    }

    
    /*EVENTOS DOS INPUTS*/
    setNome = (evento) => {
        console.log(evento.target.value);
        this.setState({nome:evento.target.value});
        this.onFocusInput("#nome");
    }

    setSobrenome = (evento) => {
        this.setState({sobrenome:evento.target.value});
        this.onFocusInput("#sobrenome");
    }

    setDtNasc = (evento) => {
        this.setState({dtNasc:evento.target.value});
        this.onFocusInput("#dt-nasc");
        $("#dt-nasc").mask("00/00/0000");
        
    }

    setCelular = (evento) => {
        this.setState({celular:evento.target.value});
        this.onFocusInput("#celular");
        $("#celular").mask("(00) 00000-0000");
    }
    
    setCpf = (evento) => {
        this.setState({cpf:evento.target.value});
        this.onFocusInput("#cpf");
        $("#cpf").mask("000.000.000-00");
        
    }

    setSexo = (evento) => {
        console.log(evento.target.value);
        this.setState({sexo:evento.target.value});
    }

    setEmail = (evento) => {
        this.setState({email:evento.target.value});
        this.onFocusInput("#email");
    }
    
    setSenha = (evento) => {
        this.setState({senha:evento.target.value});
        this.onFocusInput("#senha");
    }
    setConfirmSenha = (evento) => {
        this.setState({confirmSenha:evento.target.value});
        this.onFocusInput("#confirmSenha");
    }

    //VALIDAÇÃO DOS CAMPOS DOS INPUTS
    verificaCampos = (evento) => {
        evento.preventDefault();
        var mensagem = "";
        var id = "";

        console.log(this.state.senha);
        
        if(this.state.nome.length < 3){
            mensagem = "O campo nome deve conter no mínimo 3 caracteres";
            id = "#nome";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.sobrenome.length < 3){
            mensagem = "O campo sobrenome deve conter no mínimo 3 caracteres";
            id = "#sobrenome";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.dtNasc.length !== 10){
            mensagem = "O campo data de nascimento deve estar no formato correto";
            id = "#dt-nasc";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.celular.length !== 15){
            mensagem = "O campo celular deve estar no formato correto";
            id = "#celular";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.cpf.length !== 14){
            mensagem = "O campo CPF deve estar no formato correto";
            id = "#cpf";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.email.length === "" || this.state.email.length < 13 ){
            mensagem = "O campo e-mail deve ter no mínimo 13 caracteres";
            id = "#email";

            this.erroCaixaVazia(mensagem, id);
            
        }else if(this.state.senha.length < 8){
            mensagem = "O campo senha deve conter no mínimo 8 caracteres";
            id = "#senha";

            this.erroCaixaVazia(mensagem, id);
        
        }else if(this.state.senha !== this.state.confirmSenha){
            console.log("senha: " + this.state.senha)
            console.log("confirsenha: " + this.state.confirmSenha)
            mensagem = "O campo confirmação da senha está errada";
            id = "#confirmar-senha";

            this.erroCaixaVazia(mensagem, id);
            
        }else{
            this.verificaCpf();
        }


    }

    // MÉTODO PARA VERIFICAR SE JÁ EXISTE O CPF
    verificaCpf(){
        $.ajax({
            url: `http://localhost:8080/confeiteiro/cpf/${this.state.cpf}`,
            dataType:"json",
            success: function(resposta)
            {
                console.log('repostas:' +resposta);
                var mensagem = "";
                var id = "";

                //SE EXISTE VAI RETORNA UM ERRO E O INPUT FICARÁ VERMELHO
                if(resposta === 1){
                    mensagem = "Esse CPF já está cadastrado";
                    id = "#cpf";
                    this.erroCaixaVazia(mensagem, id);

                //SENÃO IREI SETAR O ESTADO cpfValido E VERIFICAR NOVAMENTE
                }else{

                    this.verificaEmail();
                }
                console.log(resposta);

            }.bind(this)
        });
    }
    
    //MÉTODO PARA VERIFICAR SE JÁ EXISTE O EMAIL
    verificaEmail(){
        $.ajax({
            url: `http://localhost:8080/confeiteiro/email/${this.state.email}`,
            dataType:"json",
            success: function(resposta)
            {
                var mensagem = "";
                var id = "";
                if(resposta === 1){
                    mensagem = "Esse e-mail já está cadastrado no sistema";
                    id = "#email";
                    this.erroCaixaVazia(mensagem, id);

                }else{

                    this.enviaFormConfeiteiro();
                }
                console.log("email:"+resposta);

            }.bind(this)
        });

    }

    //ERROS NOS INPUTS
    erroCaixaVazia(mensagem, id){

        $(id).css('border', '1px solid red');
        this.setState({classMessage: "alert alert-danger"});
        this.setState({message: mensagem});

    }

    //TIRAR OS ERROS AO DIGITAR NOS INPUTS
    onFocusInput(id){
        this.setState({message:""});
        this.setState({classMessage:""});
        $(id).css('border', '1px solid #ced4da');

    }

    //MÉTODO QUE IRÁ SALVAR OS DADOS DO PROFISSIONAL JUNTO AO CELULAR
    enviaFormConfeiteiro(){
        console.log(this.state.foto);
        console.log("entrouuu");

        let json = {nome:this.state.nome,
                    sobrenome:this.state.sobrenome,
                    dtNasc:this.state.dtNasc,
                    celular:{celular: this.state.celular},
                    cpf:this.state.cpf,
                    email:this.state.email,
                    senha:this.state.senha,
                    sexo:this.state.sexo};

        //SETANDO O JSON COMPLETO NO SESSIONSTORAGE
        sessionStorage.setItem('dados', JSON.stringify(json));


        if(this.state.foto !== "" ){
            console.log("entrou");

            var file = this.state.foto;
            var reader = new FileReader()
            reader.onload = function(base64) {
                sessionStorage.setItem('foto', base64);
            }
            reader.readAsDataURL(file);

            // var jsonAux = JSON.stringify(this.state.foto);
            
            // sessionStorage.setItem('foto', jsonAux);

        }

        //FAZENDO UM LINK PARA A ROTA
        browserHistory.push("/cadastroProfissionalEndereco");

    }

    render(){
        return(
            <div className="container-fluid cadastro-cliente">
                
                <div className="container pt-5">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="mb-4 text-center card-title">Realize seu cadastro aqui</h2>            
                        </div>
                        <div className="card-body">
                            <div className={this.state.classMessage} role="alert">
                                <h6 className="text-center">{this.state.message}</h6>
                            </div>
                            
                            <form>
                                
                                <div className="row mt-5 justify-content-md-center">
                                    <InputCadastro id="nome" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" type="text" onChange={this.setNome} value={this.state.nome} placeholder=". . ." label="Nome" ></InputCadastro>

                                    <InputCadastro id="sobrenome" type="text" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" onChange={this.setSobrenome} value={this.state.sobrenome} placeholder=". . ." label="Sobrenome" ></InputCadastro>

                                    <InputCadastro id="dt-nasc" type="dt-nasc" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" onChange={this.setDtNasc} value={this.state.dtNasc} placeholder=". . ." label="Data de Nascimento" ></InputCadastro>
                                </div>
                                <div className="row mt-4 justify-content-md-center">
                                    <InputCadastro id="celular" type="celular" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" onChange={this.setCelular} value={this.state.celular} placeholder=". . ." label="Celular" ></InputCadastro>

                                    <InputCadastro id="cpf" type="cpf" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" onChange={this.setCpf} value={this.state.cpf} placeholder=". . ." label="CPF" ></InputCadastro>
                                    <SelectSexoCadastro id="sexo" onChange={this.setSexo}></SelectSexoCadastro>
                                </div>
                                <div className="row mt-4 mb-4 justify-content-md-center" >
                                    <InputCadastro id="email" type="email" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" onChange={this.setEmail} value={this.state.email} placeholder=". . ." label="E-mail" ></InputCadastro>

                                    <InputCadastro id="senha" type="password" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" onChange={this.setSenha} value={this.state.senha} placeholder=". . ." label="Senha" ></InputCadastro>

                                    <InputCadastro id="confirmar-senha" type="password" className="form-group col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" onChange={this.setConfirmSenha} value={this.state.confirmSenha} placeholder=". . ." label="Confirme a senha" ></InputCadastro>
                                </div>

                                <div className="row justify-content-center">
                                        
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-8">
                                        <div className="row">
                                            <BotaoCadastro id="Próximo" onClick={this.verificaCampos} to="/cadastroProfissionalEndereco"></BotaoCadastro>
                                            <BotaoCadastro id="Cancelar"></BotaoCadastro>
                                        </div>
                                    </div>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastroProfissional;