import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import img from '../../../img/baker.png'
import img2 from '../../../img/bolo.jpg'

export class PedidosCliente extends Component{
    render(){
        return(
            <div className="pedido center">
                <Row className="show-grid area-pedidos pt-4 pb-3 pr-3 pl-3">
                    <Col xs={3} md={3}>
                        <img src={img2} style={{'width':'100%','height':'150px'}} ></img>
                    </Col>
                    <Col xs={9} md={9}>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <h2 className='text-center'>Bolo</h2>
                            </Col>
                            <Col xs={12} md={12} className='text-center'>
                                dfdsfdsf
                            </Col>
                            <Col xs={12} md={12}>
                                <Row className="show-grid">
                                    <Col xs={6} md={6}>
                                        <Row className="show-grid">
                                            <Col xs={12} md={12}>
                                                Confeiteiro:
                                            </Col>
                                            <Col xs={12} md={12}>
                                                Avaliação:
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={5} md={5}>
                                        <Row className="show-grid">
                                            <Col xs={12} md={12}>
                                                Data do pedido: 28/10/2019
                                            </Col>
                                            <Col xs={12} md={12}>
                                                Data da entrega: 28/10/2019
                                            </Col>
                                            <Col xs={12} md={12}>
                                                R$18,99
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}