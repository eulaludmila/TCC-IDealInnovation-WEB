import React, {Component} from 'react';
import {BotaoTodosProdutos} from '../../../global/BotaoTodosProdutos';
import { Link, browserHistory } from 'react-router';
import {ButtonToolbar} from 'react-bootstrap';
import {ModalDetalhesProdutos} from '../../Modal';

export default class Aprovados extends Component{

    constructor(props){
        super(props);

        this.state={showConfirm:false, show:'', onHide:''};
    }

    close=()=>{
        this.setState({showConfirm:false});
    }

    open=()=>{
        this.setState({showConfirm:true});
        console.log({showConfirm:true})
    }

    render(){
        return(
            <div>
                <div className="form-row mb-5">
                    <div className="form-group col-md-4">
                        <div className="card ml-3 caixa">
                            <div class="card-header text-center text-uppercase font-weight-bold">
                                    João da Silva
                            </div>
                            <div className="card-body">
                                <p className="texto_produto text-center">Dada de entrega: 20/10/2200</p>
                                <p className="texto_produto text-center">Hora da entrega: 20:25</p>
                                <p className="texto_produto text-center">pagamento: Boleto</p>
                                <p className="texto_produto text-center">Preço: R$30.00</p>

                                <BotaoTodosProdutos id="Detalhes" tipo="button" classe="btn btn-primary btn_detalhes" onClick={this.open}></BotaoTodosProdutos>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div>
                    <Link to="/adm/profissional/todos_produtos/aprovados"><p className="link_vermais text-right">Ver mais</p></Link>
                </div>
                <ButtonToolbar>
                    <ModalDetalhesProdutos
                    show={this.state.showConfirm}
                    onHide={this.close}
                    >
                    </ModalDetalhesProdutos>
                </ButtonToolbar>
            </div>
            

        );
    }
}