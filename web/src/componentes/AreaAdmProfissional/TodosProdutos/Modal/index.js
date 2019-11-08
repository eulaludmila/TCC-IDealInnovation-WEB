import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import SubTitulos from './Componentes/SubTitulos';
import TabelaProdutos from './Componentes/TabelaProdutos';
import Observacoes from './Componentes/Observacoes';
import Infos from './Componentes/Infos';
import Detalhes from './Componentes/Detalhes';
import './Css/modal.css';

export function ModalDetalhesProdutos(props){

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <div className="modal_detalhes">
                <Modal.Header className="header_modal" closeButton>
                    <Modal.Title >
                        <h2 className="titulo_modal text-uppercase">Detalhes</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SubTitulos sub="Detalhes de entrega e pagamento"/>
                    <Infos/>
                    <Detalhes/>
                    <SubTitulos sub="Detalhes dos produtos"/>
                    <TabelaProdutos/>
                    <Observacoes/>
                </Modal.Body>   
                <Modal.Footer>
                   
                </Modal.Footer> 
            </div>
        </Modal>
    );
}