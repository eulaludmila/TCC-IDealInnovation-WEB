import React, { Component } from 'react';
import '../../css/style.css';
import './css/header.css';
import './css/component.css';
import './js/index';
import {Link} from 'react-router';
import AnchorLink from 'react-anchor-link-smooth-scroll';





export class Header extends Component{

    render(){
        return(
            <div>
                <div className="container-fluid menu">
                    <div className="container menu_pc">
                    <AnchorLink href='#header_home'><Link to='/'><div className="logo_header"></div></Link></AnchorLink>
                    <AnchorLink href='#bolo_simples_home'><div className="item_menu">Bolos simples</div></AnchorLink>
                    <AnchorLink href='#bolo_recheado_home'><div className="item_menu">Bolos recheados</div></AnchorLink>
                    <AnchorLink href='#doce_home'><div className="item_menu">Doces</div></AnchorLink>
                    <AnchorLink href='#profissional_home'><div className="item_menu">Profissionais</div></AnchorLink>
                    {/* <AnchorLink href='#variado_home'><div className="item_menu">Variados</div></AnchorLink> */}
                        <Link to='/entrar'><button className=" btn_header entrar_header" type="submit">Entrar</button></Link>
                        <Link to='/cadastrar'><button className=" btn_header cadastro_header" type="submit">Cadastre-se</button></Link>   
                    </div>
            
                    <div className="menu_mobile ">
                        <div className="container demo-1">		
                            <div className="column">
                                <div id="dl-menu" className="dl-menuwrapper">
                                    <button className="dl-trigger">Open Menu</button>
                                    <ul className="dl-menu">
                                        <li>
                                            <Link to="#">Bolos salgados</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Bolos recheados</Link>
                                        </li>
                                        <li> 
                                            <Link to="#">Doces</Link>
                                        </li>
                                        <li> 
                                            <Link to="#">Variados</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>		
                        </div>
                        <div className="texto_header ">Show de bolos</div>
                    </div>
            
                    </div>
                    <div className="espaco_menu"></div>  
                    
                </div>
                
        );
    }

}
