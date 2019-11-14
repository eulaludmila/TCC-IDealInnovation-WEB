import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import editar from '../../../img/edit.png'
import salvar from '../../../img/correct.png'
import InputLabel from '../InputLabel'
import axios from 'axios'
import $ from 'jquery'
import { ipAPI, ipFotos } from '../../../link_config'
import { CarregandoMaior } from '../../Carregamento'

export class Perfil extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editar_dados: 'disabled', imagem_dados: editar, alt_dados: "Editar",editar_endereco: 'disabled', imagem_endereco: editar, alt_endereco: "Editar", nome: '', sobrenome: '',
            celular: '', dtnasc: '', cep: '', endereco: '',
            bairro: '', numero: '', complemento: '', cidade: '', estado: '', sexo: '', imgFoto: ''
        }

    }

    componentDidMount() {
        console.log(this.props.codCliente)

        axios.get(`${ipAPI}cliente/` + this.props.codCliente, { headers: { 'Authorization': sessionStorage.getItem('authC') } })
            .then(resposta => {
                const dados = resposta.data;
                this.setState({ nome: dados.nome })
                this.setState({ sobrenome: dados.sobrenome })
                this.setState({ celular: dados.celular.celular })
                this.setState({ dtnasc: dados.dtNasc })
                this.setState({ sexo: dados.sexo })
                this.setState({ imgFoto: dados.foto })

                // this.verificaEndereco()
                this.endereco()

            }).catch((err) => { console.log("AXIOS ERROR: ", err); })
    }


    // verificaEndereco = () =>{

    //     axios.get(`${ipAPI}endereco/verifica/cliente/` + this.props.codCliente, { headers: { 'Authorization': sessionStorage.getItem('authC') } })
    //         .then(resposta => {
    //             const dados = resposta.data;
    //            alert(dados)


    //         }).catch((err) => { console.log("AXIOS ERROR: ", err); })

    // }

    endereco=()=>{
        axios.get(`${ipAPI}enderecocliente/endereco/cliente/` + this.props.codCliente, { headers: { 'Authorization': sessionStorage.getItem('authC') } })
            .then(resposta => {
                const dados = resposta.data;
               console.log(dados)
               this.setState({ endereco: dados.endereco })
               this.setState({ cidade: dados.cidade.cidade })
               this.setState({ estado: dados.cidade.estado.uf })
               this.setState({ cep: dados.cep })
               this.setState({ numero: dados.numero })
               this.setState({ bairro: dados.bairro})
               

            }).catch((err) => { console.log("AXIOS ERROR: ", err); })
    }

    editar = (alt) => {

        if (alt === "Editar") {
            // this.setState({ editar_dados: '' })
            // this.setState({ imagem_dados: salvar })
            this.setState({ alt_dados: "Salvar" })
        } else {
            this.setState({ editar_dados: 'disabled' })
            this.setState({ imagem_dados: editar })
            this.setState({ alt_dados: "Editar" })
        }

    }

    editarEndereco = (alt) => {

        if (alt === "Editar") {
            this.setState({ editar_endereco: '' })
            this.setState({ imagem_endereco: salvar })
            this.setState({ alt_endereco: "Salvar" })
        } else {
            this.setState({ editar_endereco: 'disabled' })
            this.setState({ imagem_endereco: editar })
            this.setState({ alt_endereco: "Editar" })
        }

    }
    render() {
        return (
            <div>
                <CarregandoMaior></CarregandoMaior>
                <div className="caixa-perfil p-3 mt-4 center">
                <Form>
                    <Row className="show-grid area-pedidos pb-3 pr-3 pl-3">
                        <Col xs={12} md={12} className="mb-4 text-right">
                            <span onClick={() => this.editar(this.state.alt_dados)}><img src={this.state.imagem_dados} className="tamanho-editar" alt={this.state.alt} title={this.state.alt}></img></span>
                        </Col>
                        <Col xs={3} md={3}>
                            <img src={ipFotos + this.state.imgFoto} alt="" title="" style={{ 'width': '100%', 'height': '180px' }} ></img>
                            <input className="input-file" type="file" disabled={this.state.editar_dados} onChange={this.setFoto} name={this.props.name} />
                        </Col>
                        <Col xs={9} md={9}>
                            <Row className="show-grid">
                                <Form.Group as={Col} md="6">
                                    <InputLabel label="Nome:" value={this.state.nome} type="text" name="txt-nome" disabled={this.state.editar_dados}></InputLabel>

                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <InputLabel label="Sobrenome:" type="text" value={this.state.sobrenome} name="txt-sobrenome" disabled={this.state.editar_dados}></InputLabel>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Row>
                            <Row className="show-grid">
                                <Form.Group as={Col} md="4">
                                    <InputLabel label="Celular:" type="text" value={this.state.celular} name="txt-celular" disabled={this.state.editar_dados}></InputLabel>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">

                                    <InputLabel label="Data de Nascimento:" value={this.state.dtnasc} type="text" name="txt-data-nasc" disabled={this.state.editar_dados}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Sexo:</Form.Label>

                                    <Form.Control as="select" value={this.state.sexo} name="slt-sexo" disabled={this.state.editar_dados}>
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
                                <Form.Group as={Col} md="6">

                                    <InputLabel label="Email:" type="email" name="txt-email" value={this.state.email} disabled={this.state.editar_dados}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <InputLabel label="Confirmar Email:" type="email" name="txt-confirm-email" value={this.state.confiremail} disabled={this.state.editar_dados}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="show-grid">
                                <Form.Group as={Col} md="6">
                                    <InputLabel label="Senha:" type="password" name="txt-senha" value={this.state.senha} disabled={this.state.editar_dados}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <InputLabel label="Confirmar Senha:" type="password" name="txt-confirm-senha" value={this.state.confirmsenha} disabled={this.state.editar_dados}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="caixa-perfil p-3 mt-4 center">
                <Form>
                    <Row className="show-grid area-pedidos pb-3 pr-3 pl-3">
                        <Col xs={12} md={12} className="mb-4 text-right">
                            <span onClick={() => this.editarEndereco(this.state.alt_endereco)}><img src={this.state.imagem_endereco} className="tamanho-editar" alt={this.state.alt_endereco} title={this.state.alt}></img></span>
                        </Col>
                        <Col xs={12} md={12}>
                            <Row className="show-grid">
                                <Form.Group as={Col} md="2">

                                    <InputLabel label="CEP:" type="text" name="txt-cep" value={this.state.cep} disabled={this.state.editar_endereco}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="5" >

                                    <InputLabel label="Endereço:" type="text" name="txt-endereco" value={this.state.endereco} disabled={this.state.editar_endereco}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">

                                    <InputLabel label="Número:" type="text" name="txt-numero" value={this.state.numero} disabled={this.state.editar_endereco}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3">

                                    <InputLabel label="Complemento:" type="text" name="txt-complemento" value={this.state.complemento} disabled={this.state.editar_endereco}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Row>
                            <Row className="show-grid">
                                <Form.Group as={Col} md="5">
                                    <InputLabel label="Bairro:" type="text" name="txt-bairro" value={this.state.bairro} disabled={this.state.editar_endereco}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="5">
                                    <InputLabel label="Cidade:" type="text" name="txt-cidade" value={this.state.cidade} disabled={this.state.editar_endereco}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <InputLabel label="UF:" type="text" name="txt-uf" value={this.state.estado} disabled={this.state.editar_endereco}></InputLabel>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>
            </div>
        )
    }
}