import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import img from '../../../img/baker.png'
import img2 from '../../../img/bolo.jpg'
import axios from 'axios'
import { ipAPI, ipFotos } from '../../../link_config'
import {CarregandoMaior} from '../../Carregamento'

export class PedidosCliente extends Component{

    constructor(props){
        super(props)
        this.state={listaPedidos:[]}
    }
    componentDidMount(){
        this.pedidoRealizados()
    }

    pedidoRealizados=()=>{
        axios.get(`http://localhost:8080/pedido/cliente/` + this.props.codCliente, { headers: { 'Authorization': sessionStorage.getItem('authC') } })
            .then(resposta => {
                const dados = resposta.data;
                console.log(dados)
               this.setState({listaPedidos:dados})


            }).catch((err) => { console.log("AXIOS ERROR: ", err); })
    }


    render(){
        return(
           <div>
               
               <div className="caixa-perfil p-3 mt-4 center">
               <CarregandoMaior></CarregandoMaior>
               {this.state.listaPedidos.map(pedidos => 
                
            <div className="pedido center" key={pedidos[0].codPedido}>
                
                <Row className="show-grid area-pedidos pt-4 pb-3 pr-3 pl-3">
                    <Col xs={3} md={3}>
                        <img src={ipFotos + pedidos.foto} alt="" title="" style={{'width':'100%','height':'150px'}} ></img>
                    </Col>
                    <Col xs={9} md={9}>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <h2 className='text-center'>Nº Pedido: {pedidos[0].codPedido}</h2>
                            </Col>
                            <Col xs={12} md={12} className='text-center'>
                                {pedidos[0].tipoPagamento === "B" ? "Boleto" : "Crédito"}
                            </Col>
                            <Col xs={12} md={12}>
                                <Row className="show-grid">
                                    <Col xs={6} md={6}>
                                        <Row className="show-grid">
                                            <Col xs={12} md={12}>
                                                Confeiteiro: {pedidos[1].confeiteiro.nome}
                                            </Col>
                                            <Col xs={12} md={12}>
                                                Obs.: {pedidos[0].observacao}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={5} md={5}>
                                        <Row className="show-grid">
                                            <Col xs={12} md={12}>
                                                Data do pedido: {pedidos[0].dataSolicitacao}
                                            </Col>
                                            <Col xs={12} md={12}>
                                                Data da entrega: {pedidos[0].dataEntrega}
                                            </Col>
                                            <Col xs={12} md={12}>
                                                R${pedidos[0].valorTotal}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            )}
            </div>
            </div>
        )
    }
}