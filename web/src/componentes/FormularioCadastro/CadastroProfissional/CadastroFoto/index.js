import React, {Component} from 'react';
import '../../css/cadastro.css';
import img from '../../../../img/user3.png'
import ImgCadastro from '../../ImgCadastro'
import BotaoCadastro from '../../BotaoCadastro'
// import '../../../css/bootstrap.min.css'
import $ from 'jquery';
import {ModalCadastro} from '../../../Modal';
import { browserHistory} from 'react-router';

//Classe da áre de Cadastro do Cliente
class CadastroEndereco extends Component{

    //CONSTRUTOR QUE DECLARA OS ESTADOS
    constructor(props){
        super(props);
        this.state={logradouro:'',complemento:'',numero:'',bairro:'',cep:'',estado:'',foto:'',cidade:'', imgFoto:`${img}`, classMessage:'', message:''};
        
        this.enviaFormEnderecoProfissional = this.enviaFormEnderecoProfissional.bind(this);
    }

    //PEGAR O ONCHANGE DA FOTO
    setFoto = (evento) => {

        this.onFocusInput("#img");

        //PEGANDO O ARQUIVO DA FOTO
        let file = evento.target.files[0];
        if(evento.target.files[0].size !== null){
            var tamanho = evento.target.files[0].size
        }

        if(tamanho < 1048576){

            //SETANDO O ESTADO DA FOTO COM O ARQUIVO
            this.setState({foto:file});
            let reader = new FileReader();

            //PREVIEW DA FOTO
            reader.onloadend = function(){
                $('#img').attr('src', reader.result)
            }
            reader.readAsDataURL(file);

        }else{
            $('#img').attr('src',this.state.imgFoto);
            $("#img").css("border", "solid 2px #880e4f");
            var mensagem = "Tamanho máximo para a foto é de 1MB";
            this.erroCaixaVazia(mensagem);
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

    //MÉTODO RESPONSÁVEL POR SALVAR O ENDEREÇO RELACIONADO AO PROFISSIONAL
    enviaFormEnderecoProfissional(evento){
        evento.preventDefault();

        $.ajax({
            url:"http://localhost:8080/enderecoconfeiteiro",
            contentType:"application/json",
            dataType:"json",
            type:"post",
            data:JSON.stringify({
                                endereco:JSON.parse(sessionStorage.getItem("endereco")),
                                confeiteiro:JSON.parse(sessionStorage.getItem("dados"))}),
            success: function(resposta){
                console.log(resposta);
               

                if(this.state.foto !== ""){
                    this.enviarFotoConfeiteiro(resposta.confeiteiro.codConfeiteiro);
                }else{
                    this.cadastroRealizado();
                }
            }.bind(this)               
        });

    }

    //ENVIAR A FOTO JUNTO COM O CODIGO DO CONFEITEIRO
    enviarFotoConfeiteiro=(codigo)=>{

        //PEGA O ARQUIVO DA FOTO E SALVA JUNTO COM O CODIGO DO CLIENTE
        var formDados= new FormData();
        formDados.append('foto', this.state.foto);
        formDados.append('codConfeiteiro', codigo);

        $.ajax({
            url: 'http://localhost:8080/foto/confeiteiro',
            data: formDados,
            processData: false,
            contentType: false,
            type: 'post',
            success: function(data) 
            {
                this.cadastroRealizado();
                sessionStorage.setItem("dados", data.confeiteiro.codConfeiteiro)
            }.bind(this)
        });
    }

    
    cadastroRealizado=()=>{
        //ABRIR A MODAL DE CADASTRO REALIZADO
        $('#my-modal').modal('show');
                    
        //AO APERTAR EM "OK" IRÁ REDIRECIONAR PARA A TELA INCIAL DO SITE
        $(".btn-modal").on("click", function(){
            browserHistory.push("/adm/profissional")
        });
    }

    render(){
        return(
            <div className="container-fluid cadastro-cliente">
                <ModalCadastro alt="Finalizado" title="Finalizado"></ModalCadastro>
                <div className="container pt-5">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="mb-4 text-center card-title">Cadastre a sua foto</h2>            
                        </div>
                        <div className="card-body">
                            <div className={this.state.classMessage} role="alert">
                                <h6 className="text-center color-danger">{this.state.message}</h6>
                            </div>
                            <form>
                                <div className="row mb-5">
                                    <ImgCadastro name="file" id="img" onChange={this.setFoto} src={this.state.imgFoto}></ImgCadastro>
                                </div>
                                <div className="row justify-content-center">
                                        
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-8">
                                        <div className="row">
                                            <BotaoCadastro onClick={this.enviaFormEnderecoProfissional} id="Entrar"></BotaoCadastro>
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

export default CadastroEndereco;