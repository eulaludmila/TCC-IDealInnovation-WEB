import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import {InputEmailSenha} from '../global/InputEmailSenha';
import $ from 'jquery';

export class TelaEmail extends Component{

    //CONSTRUTOR DECLARANDO OS ESTADOS
    constructor(props){
        super(props);
        this.state={ emailNovo:'',confirmEmail:'',message:"", classMessage:""};
        
    }

    setEmailNovo=(evento)=>{
        console.log(evento.target.value)
        this.setState({emailNovo:evento.target.value});
        this.onFocusInput("#txt_novo_email");
    }

    setConfirmEmail=(evento)=>{
        this.setState({confirmEmail:evento.target.value});
        this.onFocusInput("#txt_confirmar_email");
    }

    //VALIDAÇÃO DOS CAMPOS DOS INPUTS
    verificaCampos = (evento) => {
        evento.preventDefault();
        var mensagem = "";
        var id = "";

        console.log(this.state.emailNovo.length);
        
        if(this.state.emailNovo.length === "" || this.state.emailNovo.length < 13 ){
            mensagem = "O campo e-mail deve ter no mínimo 13 caracteres";
            id = "#txt_novo_email";

            this.erroCaixaVazia(mensagem, id);
            
        }else if(this.state.emailNovo !== this.state.confirmEmail){
            // console.log("senha: " + this.state.senha)
            // console.log("confirsenha: " + this.state.confirmSenha)
            mensagem = "O campo confirmação da senha está errada";
            id = "#txt_confirmar_email";

            this.erroCaixaVazia(mensagem, id);
            
        }else{
            
        }


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


    render(){
        return(
            <ContainerAdm className="container conteudo-adm">
            
                <div className="caixa_input center mt-5">
                        <div className={this.state.classMessage} role="alert">
                            <h6 className="text-center">{this.state.message}</h6>
                        </div>
                    <form>
                        <InputEmailSenha grupo="form-group" tipo="email" label="E-mail Atual:" desabilitado="disabled" classeInput="form-control" id="txt_email"></InputEmailSenha>
                        <InputEmailSenha grupo="form-group" onChange={this.setEmailNovo} value={this.state.emailNovo} tipo="email" label="Novo E-mail:" classeInput="form-control" aria-describedby="emailHelp" id="txt_novo_email" placeholder="Digite o seu novo e-mail"></InputEmailSenha>
                        <InputEmailSenha grupo="form-group" onChange={this.setConfirmEmail} value={this.state.confirmEmail} tipo="email" label="Confirme E-mail:" aria-describedby="emailHelp" classeInput="form-control" id="txt_confirmar_email" placeholder="Confirme o seu novo e-mail"></InputEmailSenha>
                        
                        <div className="caixa_botoes center">
                            <button type="button" onClick={this.verificaCampos} className="btn btn-success mr-5">Salvar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>

                </div>

		    </ContainerAdm>
        );
    }
}

export class BoxTelaEmail extends Component{
    render(){
        return(
            <div>
                <Header titulo="Editar E-mail"></Header>
                <TelaEmail></TelaEmail>
            </div>
        );
    }
}