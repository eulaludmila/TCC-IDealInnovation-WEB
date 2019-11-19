import React, { Component } from 'react';
import '../../css/style.css';
import './css/header.css';
import './js/index';
// import abrirMenu from '../../img/menu_mobile.jpg';
// import fecharMenu from '../../img/fechar_menu.jpg';
import { Link, browserHistory } from 'react-router';
// import $ from 'jquery';
import { DropdownButton, Dropdown, Nav, Navbar } from 'react-bootstrap'
import decode from 'jwt-decode'


export class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { click: "0", clickMenu: "0", listaCategorias: [], listaProdutos: [] };

    }


    logout = () => {
        sessionStorage.removeItem('authC')
        browserHistory.push('/')
    }


    render() {

        var menucadastrar = ''
        var menuentrar = ''
        var dropdown = ''


        if (sessionStorage.getItem('authC') === null) {
            menuentrar = <Link to='/entrar'><button className=" btn_header entrar_header" type="submit">Entrar</button></Link>
            menucadastrar = <Link to='/cadastrar'><button className=" btn_header cadastro_header" type="submit">Cadastre-se</button></Link>


        } else {

            var cod = decode(sessionStorage.getItem('authC'))

        //     console.log("/cliente/" + cod.codUsuario)
        //     dropdown = <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //     <NavDropdown.Item>Action</NavDropdown.Item>
        //     <NavDropdown.Item>Another action</NavDropdown.Item>
        //     <NavDropdown.Item>Something</NavDropdown.Item>
        //     <NavDropdown.Divider />
        //     <NavDropdown.Item>Separated link</NavDropdown.Item>
        // </NavDropdown>
        dropdown =
            <DropdownButton variant='Primary' className="entrar_header btn_header" id="dropdown-basic-button" title="Eu">
                {/* <Dropdown.Item><div><Link to={"/cliente/" + cod.codUsuario}>Configurações</Link></div></Dropdown.Item> */}
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.logout}>Sair</Dropdown.Item>
            </DropdownButton>

        }

        return (
            <div>

                <div className="container-fluid menu">
                    <div className="container menu_pc">

                        <Navbar bg="#880e4f" expand="lg">
                        
                            <Link to='/'><div className="logo_header"></div></Link>
                            <div className="logo_aux"></div>
                            <Navbar.Brand ><div className="menu_aux"></div></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link to="/produtos"><div className="item_menu">Produtos</div></Link>
                                    <Link to="/confeiteiros"><div className="item_menu">Confeiteiros</div></Link>
                                    <Link to='/sobre'><div className="item_menu">Categoria</div></Link>
                                    <Link to='/faleconosco'><div className="item_menu">Contato</div></Link>
                                    <Link to='/sobre'><div className="item_menu">Sobre</div></Link>
                                    <Link to='/login/cliente'><button className=" btn_header login_header center" type="submit">Login Cliente</button></Link>
                                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item>Action</NavDropdown.Item>
                                        <NavDropdown.Item>Another action</NavDropdown.Item>
                                        <NavDropdown.Item>Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item>Separated link</NavDropdown.Item>
                                    </NavDropdown> */}
                                    {menuentrar}
                                {menucadastrar}
                                {dropdown}
                                </Nav>
                               
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <div className="espaco_menu"></div>

            </div>
           




        );
    }

}
