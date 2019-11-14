import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import './area_cliente.css'
import {PedidosCliente} from './Pedidos'
import {Perfil} from './Perfil'
// import {PedidosAndamento} from './Andamento'

export class AreaCliente extends Component{

    constructor(props){
        super(props)
        this.state={cor:'#880e4f'}
    }

    selecionado =() =>{
        this.setState({cor:'#ffffff'})
    }
    render(){
        return(
            <div className="container tab">
                <div className="caixa-area-cliente">
                    <Tabs defaultActiveKey="Meu Perfil" onSelect={this.selecionado}  transition={false} id="noanim-tab-example">
                        <Tab eventKey="Meu Perfil" title="Meu Perfil" style={{'color':`${ this.state.cor }%`}}>
                            <Perfil codCliente={this.props.params.codCliente}></Perfil>

                        </Tab>
                        <Tab eventKey="profile" className='pt-5 pb-5' title="Pedidos Realizados">
                            {/* <Sonnet /> */}
                            <PedidosCliente codCliente={this.props.params.codCliente}></PedidosCliente>
                        </Tab>
                        <Tab eventKey="contact" title="Em andamento">
                        {/* <PedidosAndamento codCliente={this.props.params.codCliente}></PedidosAndamento> */}
                        </Tab>
                    </Tabs>
                </div>
                
            </div>
        )
    }
}
