import React, {Component}  from 'react'
import {Form , Row, Col,Button,InputGroup} from 'react-bootstrap'
import editar from '../../../img/edit.png'
import salvar from '../../../img/correct.png'
import InputLabel from '../InputLabel'
import axios from 'axios'
import {ipAPI, ipFotos} from '../../../link_config'

export class Perfil extends Component{
    constructor(props){
        super(props)

        this.state={editar:'disabled', imagem:editar, alt:"Editar", nome:'', sobrenome:'',
        celular:'', dtnasc:'',cep:'', endereco:'', 
        bairro:'',numero:'',complemento:'',cidade:'', estado:'', sexo:'', imgFoto:''}

    }

    componentDidMount(){

        axios.get(`${ipAPI}enderecocliente/cliente/`+this.props.codCliente,{headers: {'Authorization': sessionStorage.getItem('auth')}})
        .then(resposta => {
            const dados = resposta.data;
            console.log(dados.endereco.cidade.estado.uf)
            this.setState({nome:dados.cliente.nome})
            this.setState({sobrenome:dados.cliente.sobrenome})
            this.setState({celular:dados.cliente.celular.celular})
            this.setState({dtnasc:dados.cliente.dtNasc})
            this.setState({cep:dados.endereco.cep})
            this.setState({endereco:dados.endereco.endereco})
            this.setState({cidade:dados.endereco.cidade.cidade})
            this.setState({estado:dados.endereco.cidade.estado.uf})
            this.setState({sexo:dados.cliente.sexo})
            this.setState({complemento:dados.endereco.complemento})
            this.setState({numero:dados.endereco.numero})
            this.setState({bairro:dados.endereco.bairro})
            this.setState({imgFoto:dados.cliente.foto})
            



           
       }).catch((err) => {console.log("AXIOS ERROR: ", err);})

    }

    editar = (alt) => {

        if(alt === "Editar"){
            this.setState({editar:''})
            this.setState({imagem:salvar})
            this.setState({alt:"Salvar"})
        }else{
            this.setState({editar:'disabled'})
            this.setState({imagem:editar})
            this.setState({alt:"Editar"})
        }


        // alert("clicou")
        
    }
    render(){
        return(
            <div className="caixa-perfil p-3 mt-4 center">
                <Form>
                   <Row className="show-grid area-pedidos pb-3 pr-3 pl-3">
                   <Col xs={12} md={12} className="mb-4 text-right">
                        <span onClick={() => this.editar(this.state.alt)}><img src={this.state.imagem} className="tamanho-editar" alt={this.state.alt} title={this.state.alt}></img></span>
                    </Col>  
                    <Col xs={3} md={3}>
                        <img src={ipFotos+this.state.imgFoto} style={{'width':'100%','height':'180px'}} ></img>
                        <input className="input-file" type="file" disabled = {this.state.editar} onChange={this.setFoto} name={this.props.name}/>
                    </Col>
                    <Col xs={9} md={9}>
                        <Row className="show-grid">
                            <Form.Group as={Col} md="6">
                                <InputLabel label="Nome:" value={this.state.nome} type="text" name="txt-nome" disabled={this.state.editar}></InputLabel>
                              
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <InputLabel label="Sobrenome:" type="text" value={this.state.sobrenome} name="txt-sobrenome" disabled={this.state.editar}></InputLabel>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                        </Row>
                        <Row className="show-grid">
                            <Form.Group as={Col} md="4">
                                <InputLabel label="Celular:" type="text" value={this.state.celular} name="txt-celular" disabled={this.state.editar}></InputLabel>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                
                                <InputLabel label="Data de Nascimento:" value={this.state.dtnasc} type="text" name="txt-data-nasc" disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Sexo:</Form.Label>
                                
                                    <Form.Control as="select" value={this.state.sexo} name="slt-sexo" disabled = {this.state.editar}>
                                        <option>Selecione...</option>
                                        <option value="F">Feminino</option>
                                        <option value="M">Masculino</option>
                                        <option value="O">Outro</option>
                                        <option value="N">Nenhum</option>

                                    </Form.Control>

                                    

                                    <Form.Control.Feedback type="invalid">
                                    {/* {errors.username} */}
                                    </Form.Control.Feedback>
                            </Form.Group>
                           
                        </Row>
                        <Row className="show-grid">
                            <Form.Group as={Col} md="2">
                                
                                <InputLabel label="CEP:" type="text" name="txt-cep" value={this.state.cep} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5" >
                               
                                <InputLabel label="Endereço:" type="text" name="txt-endereco" value={this.state.endereco} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                               
                                <InputLabel label="Número:" type="text" name="txt-numero" value={this.state.numero} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                               
                                <InputLabel label="Complemento:" type="text" name="txt-complemento" value={this.state.complemento} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                        </Row>
                        <Row className="show-grid">
                            <Form.Group as={Col} md="5">
                                <InputLabel label="Bairro:" type="text" name="txt-bairro" value={this.state.bairro} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5">
                                <InputLabel label="Cidade:" type="text" name="txt-cidade" value={this.state.cidade} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                                <InputLabel label="UF:" type="text" name="txt-uf" value={this.state.estado} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="show-grid">
                            <Form.Group as={Col} md="6">
                                
                                <InputLabel label="Email:" type="email" name="txt-email" value={this.state.email} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                            <InputLabel label="Confirmar Email:" type="email" name="txt-confirm-email" value={this.state.confiremail} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="show-grid">
                            <Form.Group as={Col} md="6">
                            <InputLabel label="Senha:" type="password" name="txt-senha" value={this.state.senha} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <InputLabel label="Confirmar Senha:" type="password" name="txt-confirm-senha" value={this.state.confirmsenha} disabled={this.state.editar}></InputLabel>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Col>
                </Row>
                </Form>
            </div>
        )
    }
}