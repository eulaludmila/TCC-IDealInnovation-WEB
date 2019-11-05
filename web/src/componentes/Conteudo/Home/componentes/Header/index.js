import React, { Component } from 'react';
import '../../css/style.css';
import './css/header.css';
import './js/index';
import abrirMenu from '../../img/menu_mobile.jpg';
import fecharMenu from '../../img/fechar_menu.jpg';
import {Link,browserHistory} from 'react-router';
import $ from 'jquery';
import {DropdownButton,Dropdown} from 'react-bootstrap'
import decode from 'jwt-decode'


export class Header extends Component{

    constructor(props){
        super(props);

        this.state={click: "0", clickMenu: "0", listaCategorias: [], listaProdutos: []};

    }

    componentDidMount(){
        $(".submenu_responsivo").hide();
        $("#menu_imagem").attr('src', abrirMenu);
    }

    logout = () =>{
        sessionStorage.removeItem('authC')
        browserHistory.push('/')
    }


    menu = () => {

        

        if(this.state.clickMenu === "0"){

            $("#menu_imagem").attr('src', fecharMenu);
            
            $(".menu_itens").removeClass("sumir-menu");
            $(".menu_itens").addClass("aparecer-menu");

        
           
            this.setState({clickMenu: "1"});
           
        }

        if(this.state.clickMenu === "1"){
            $("#menu_imagem").attr('src', abrirMenu);
           
            $(".menu_itens").removeClass("aparecer-menu");
            $(".menu_itens").addClass("sumir-menu");
            this.setState({clickMenu: "0"});
        }

    }

    submenu = () => {

        if(this.state.click === "0"){

            $(".submenu_responsivo").slideToggle();
           
           
            this.setState({click: "1"});
           
        }

        if(this.state.click === "1"){
            $(".submenu_responsivo").slideToggle();
    
           
            this.setState({click: "0"});
        }
        
    }

    render(){
        // return(
        //     <div>

        //         <div className="container-fluid menu">
        //             <div className="container menu_pc">
        //            <Link to='/'><div className="logo_header"></div></Link>

        //             <Link to="/produtos"><div className="item_menu">Produtos</div></Link>
        //             <div className="item_menu">Categorias</div>

        //             <Link to="/confeiteiros"><div className="item_menu">Confeiteiros</div></Link>
        //             {/* <AnchorLink href='#variado_home'><div className="item_menu">Variados</div></AnchorLink> */}
        //             <Link to='/sobre'><div className="item_menu">Sobre</div></Link>
        //                 <Link to='/entrar'><button className=" btn_header entrar_header" type="submit">Entrar</button></Link>
        //                 <Link to='/cadastrar'><button className=" btn_header cadastro_header" type="submit">Cadastre-se</button></Link>   
        //             </div>
            
            
        //             </div>
        //             <div className="espaco_menu"></div>  
                    
                    
        //             <div id="menu-responsivo" className="row">
                    
                    
        //                 <div id="texto_header" className="col-sm-11 col-10"> Show de Bolos</div>
        //                 <div id="imagem_menu"  className="col-sm-1 col-2">
        //                     <img id="menu_imagem" onClick={this.menu} alt="menu" title="menu"/> 
        //                     <div className="menu_itens">
        //                         <div className="itens setinha" onClick={this.submenu}> <p>Produtos</p> </div>
                                
        //                         {this.state.listaCategorias.map(categorias =>
                        
        //                             <Link to={"/produtos/" + categorias.codCategoria}><div className="submenu_responsivo submenu_r">{categorias.categoria}</div></Link>
                        
                        
        //                         )}

                                
                                
        //                         <Link to="/confeiteiros"><div className="itens"> <p>Confeiteiros</p> </div></Link>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="espaco_menu_resposnsivo"></div> 
        //         </div>


                
        // );

        var menucadastrar=''
        var menuentrar=''
        var dropdown=''


        if(sessionStorage.getItem('authC')=== null){
           menuentrar = <Link to='/entrar'><button className=" btn_header entrar_header" type="submit">Entrar</button></Link>
            menucadastrar = <Link to='/cadastrar'><button className=" btn_header cadastro_header" type="submit">Cadastre-se</button></Link>
            
                         
        }else{

            var cod = decode(sessionStorage.getItem('authC'))
           
            console.log("/cliente/" + cod.codUsuario)
            dropdown = <DropdownButton variant='Primary' className="entrar_header btn_header" id="dropdown-basic-button" title="Eu">
            <Dropdown.Item><Link to={"/cliente/" + cod.codUsuario}>Configurações</Link></Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item onClick={this.logout}>Sair</Dropdown.Item>
          </DropdownButton>
        console.log( dropdown )
              
        }

        return(
            <div>

                <div className="container-fluid menu">
                    <div className="container menu_pc">
                    <Link to='/'><div className="logo_header"></div></Link>

                        <Link to="/produtos"><div className="item_menu">Produtos</div></Link>
                        <div className="item_menu">Categorias</div>

                        <Link to="/confeiteiros"><div className="item_menu">Confeiteiros</div></Link>
                        {/* <AnchorLink href='#variado_home'><div className="item_menu">Variados</div></AnchorLink> */}
                        <Link to='/sobre'><div className="item_menu">Sobre</div></Link>
                        {menuentrar}
                        {menucadastrar}
                        
                        {dropdown}

                          
                    </div>
            
            
                    </div>
                    <div className="espaco_menu"></div>  
                    
                    
                    <div id="menu-responsivo" className="row">
                    
                    
                        <div id="texto_header" className="col-sm-11 col-10"> Show de Bolos</div>
                        <div id="imagem_menu"  className="col-sm-1 col-2">
                            <img id="menu_imagem" onClick={this.menu} alt="menu" title="menu"/> 
                            <div className="menu_itens">
                                <div className="itens setinha" onClick={this.submenu}> <p>Produtos</p> </div>
                                
                                {this.state.listaCategorias.map(categorias =>
                        
                                    <Link to={"/produtos/" + categorias.codCategoria}><div className="submenu_responsivo submenu_r">{categorias.categoria}</div></Link>
                        
                        
                                )}

                                
                                
                                <Link to="/confeiteiros"><div className="itens"> <p>Confeiteiros</p> </div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="espaco_menu_resposnsivo"></div> 
                </div>


                
        );
    }

}
