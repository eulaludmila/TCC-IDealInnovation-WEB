import React, { Component } from 'react';
import InputAvaliar from '../InputAvaliar'
import TextAvaliar from '../TextAvaliar'
import Estrelas from 'react-star-ratings'
import email from 'email-validator'
import {Modal} from 'react-bootstrap';
import { InputEmailSenha } from '../../../../AreaAdmProfissional/global/InputEmailSenha';

export default class AvaliarProduto extends Component{

    constructor(props){
        super(props)
        this.state = {rating:0, nome:'',email:'', teaxo:'', focus:false, show:false, blur:true}
    }

    onFocus = (evento) => {
        this.setState({blur:false});
        
        if(this.state.blur === false){
            // alert('ksfnsf')
           
            this.setState({show:true})
            this.setState({focus:true})
        }else{
            
        }
    }

    close=()=>{
        this.setState({blur:true});
        this.setState({focus:false})
        this.setState({show:false});
        
    }

    setNome(evento){
        this.setState({nome:evento.target.value})
    }

    setEmail(evento){

        this.setState({email:evento.target.value})
        if(email.validate(evento.target.value)){

        }else{
            console.log('inválido')
        }

    }

    setTexto(evento){
        this.setState({texto:evento.target.value})
    }

    valur =(evento)=>{
        this.login()
        
    }

    login =(evento)=>{
        if(sessionStorage.getItem('authC') !== null){

            this.setState({rating:evento})
            return true
        }else{
            alert('Não logado')
            return false
        }

    }

    render(){
        return(
            <div className="form-row mt-3 mb-4">
                <div className="col-md-8 container">
                    <h4 className="card-text">Avalie este produto:</h4>
                    <h6>Sua Avaliação:*</h6>
                    <div className="rate">
                        <Estrelas starDimension="25px"  starHoverColor="#fcba03" starRatedColor="#fcba03" starEmptyColor="#dedede" starSpacing="1px" rating={this.state.rating} changeRating={this.valur} name="estrelas"></Estrelas>
                    </div>
                </div>
                <div className="container col-md-8 mt-3 ">
                    <TextAvaliar titulo="Escreva sua opinião:*" value={this.state.texto} onChange={this.setTexto} className="form-control txtArea" id="txt_opiniao" rows="5"/>
                    <div className="form-row mt-2">
                        <InputAvaliar className="form-group col-md-6" value={this.state.nome} onChange={this.setNome} onFocus={ this.onFocus } onFocusOut={this.state.blur} label="Nome:*" type="text" id="txt_nome" classeIp="form-control"/>
                        <InputAvaliar className="form-group col-md-6" value={this.state.email} onChange={this.setEmail} label="Email:*" type="email" id="txt_email" classeIp="form-control"/>
                        <InputAvaliar className="form-group col-md-6" type="button" id="txt_email" classeIp="btn btn-primary" value="Enviar"/>
                    </div>
                </div>

                <Modal show={this.state.show} animation={true} onHide={this.close} id="my-modal" centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Verificação</Modal.Title>

                    </Modal.Header>
                    <form>
                        <Modal.Body>
                            <div className={this.state.classMessage} role="alert">
                                <h6 className="text-center color-danger">{this.state.message}</h6>
                            </div>
                        
                            <InputEmailSenha grupo="form-group" tipo="email" label="E-mail:" classeInput="form-control" aria-describedby="emailHelp" id="txt_email_verificacao" onChange={this.setEmailVerificacao} value={this.state.emailVerificacao} placeholder="Digite seu e-mail"></InputEmailSenha>
                            <InputEmailSenha grupo="form-group"  tipo="password" label="Senha:" aria-describedby="emailHelp" classeInput="form-control" id="txt_senha_verificacao" onChange={this.setSenhaVerificacao} value={this.state.senhaVerificacao} placeholder="Digite sua senha"></InputEmailSenha>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" onClick={this.editarEmail} className="btn btn-success">Salvar</button>
                               
                        </Modal.Footer>
                        </form>  
                </Modal>
            </div>
        );
    }
}