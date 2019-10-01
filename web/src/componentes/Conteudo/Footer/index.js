import React, { Component } from 'react';

import './css/footer-white.css';
import './css/footer.css';


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
                                    <li>Home</li>
                                    <li>Cursos</li>
                                    <li>Downloads</li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h5>Quem somos</h5>
                                <ul>
                                    <li>Informações da Empresa</li>
                                    <li>Contato</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h5>Suporte</h5>
                                <ul>
                                    <li>FAQ</li>
                                    <li>Telefones</li>
                                    <li>Chat</li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <div className="social-networks">
                                        <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                    </div>
                                    
                                        <button type="button" className="btn btn-default">Contato</button>
                                    
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
