import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import { ipAPI, ipFotos } from '../../../link_config'
import {CarregandoMaior} from '../../Carregamento'

export class PagamentoCliente extends Component{

    constructor(props){
        super(props)
        this.state={listaPedidos:[],loading:false}
    }
    componentDidMount(){
        this.setState({loading:true})
        this.pedidoRealizados()
    }

    pedidoRealizados=()=>{
        axios.get(`${ipAPI}pedido/cliente/pagamento/` + this.props.codCliente, { headers: { 'Authorization': sessionStorage.getItem('authC') } })
            .then(resposta => {
                const dados = resposta.data;
                console.log(dados)
               this.setState({listaPedidos:dados})
console.log("fgfgfgf")
    this.setState({loading:false})

            }).catch((err) => { console.log("AXIOS ERROR: ", err); })
    }


    render(){
        return(
           <div>
               
               <div className="caixa-perfil p-3 mt-4 center">
               <CarregandoMaior loading={this.state.loading} message='carregando ...'></CarregandoMaior>
               {this.state.listaPedidos.map(pedidos => 
             

             <div className="pedido" key={pedidos[0].codPedido}>
                 
                 <Row className="show-grid area-pedidos pb-2">
                     {/* <Col xs={3} md={3}>
                         <img src={ipFotos + pedidos.foto} alt="" title="" style={{'width':'100%','height':'150px'}} ></img>
                     </Col> */}
                     <Col xs={12} md={12} sm={12} lg={12}>
                         <Row className="show-grid">
                             <Col xl={12} xs={12} md={12} sm={12} lg={12} className="titulo-pedido">
                                 <h2 className='text-center'>Nº Pedido: {pedidos[0].codPedido}</h2>
                             </Col>
                             <Col xl={12} xs={12} md={12} sm={12} lg={12} className='text-center mb-2'>
                                 Tipo de pagamento: {pedidos[0].tipoPagamento === "B" ? "Boleto" : "Crédito"}
                             </Col>
                             <Col xl={12} xs={12} md={12} sm={12} lg={10}>
                                 <Row className="show-grid">
                                     <Col xs={12} xl={12} md={10} sm={9} lg={9} className="mb-3">
                                         <Row className="show-grid col">
                                             <Col xl={12} xs={12} md={12}>
                                                 Confeiteiro(a): {pedidos[1].confeiteiro.nome}HGHGHGHHHHHHHHHHHHHHHHHHHHHHHHHH
                                             </Col>
                                             <Col xl={12} xs={12} md={12}>
                                                 Data do pedido: {pedidos[0].dataSolicitacao}
                                             </Col>
                                             <Col xl={12} xs={12} md={12}>
                                                 {/* Obs.: pedidos[0].observacao */}
                                                 Data da entrega: {pedidos[0].dataEntrega}
                                             </Col>
                                             <Col xl={12} xs={12} md={12}>
                                                 R${pedidos[0].valorTotal}
                                             </Col>
                                         </Row>
                                     </Col>
                                     <Col xl={12} xs={12} md={2} sm={2} lg={2}>
                                         <Row className="show-grid">
                                             
                                             <Col xs={12} md={12} sm={12} lg={2} className="center">
                                             <Button className="btn btn-outline-entrar btn-pedido">Detalhes</Button>
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