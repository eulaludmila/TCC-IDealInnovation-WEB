import React, { Component } from 'react';

import './css/footer-white.css';
import './css/footer.css';
import {Link} from 'react-router';

export class Footer extends Component{

    render(){
        return(
            <div className="container-fluid rodape">
                <footer id="myFooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 mt-4">
                                <h2 className="logo"> Show de Bolos </h2>
                            </div>
                            <div className="col-sm-2">
                                <h5>Inicio</h5>
                                <ul>
                                    <li>Produtos</li>
                                    <li>Confeiteiros</li>
                                    <Link to="/entrar"><li>Entrar</li></Link>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h5>Quem somos</h5>
                                <ul>
                                    <li>Empresa Responsável</li>
                                    <Link to="/sobre"><li>Sobre</li></Link>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h5>Suporte</h5>
                                <ul>
                                <Link to="/faleconosco"><li>Contato</li></Link>
                                    {/* <li>Telefones</li>
                                    <li>Chat</li> */}
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <div className="social-networks">
                                        <span className="twitter"><i className="fab fa-twitter"></i></span>
                                        <span className="facebook"><i className="fab fa-facebook-f"></i></span>
                                        <span className="instagram"><i className="fab fa-instagram"></i></span>
                                    </div>
                                    
                                    <Link to="/faleconosco"><button type="button" className="btn btn-default">Contato</button></Link>
                                </div>
                            </div>
                        </div>
                    <div className="footer-copyright">
                        <p>© 2019 Copyright - IDeal Innovation</p>
                    </div>
                </footer>
            </div>

        );
    }

}
