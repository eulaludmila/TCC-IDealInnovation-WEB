import React, { Component } from 'react';
import '../../componentes/AreaAdmProfissional/HomeProfissional/cms_home_confeiteiro.css'
import '../../componentes/AreaAdmProfissional/Email/cms_editar_email.css'
import '../../componentes/AreaAdmProfissional/Header/header_adm_profissional.css'
import '../../componentes/AreaAdmProfissional/Menu/menu_adm_profissional.css'
import '../../componentes/AreaAdmProfissional/DadosPessoais/cms_editar_dados.css'
import '../../componentes/AreaAdmProfissional/EditarEndereco/cms_editar_endereco.css'
import '../../componentes/AreaAdmProfissional/SolicitacoesPedidos/cms_solicitacoes.css'
import '../../componentes/AreaAdmProfissional/PedidosAprovados/cms_aprovados.css'

import '../../css/font/css/all.css'
import '../../js/accordian'
// import Header from '../AreaAdmProfissional/Header'
import Menu from '../AreaAdmProfissional/Menu'

class AdmProfissional extends Component {
  render(){
    return (
      <div>
        <Menu></Menu>
        <div className="main">
        {this.props.children}
			
        
      </div>

      </div>
    );
  }
}

export default AdmProfissional;
