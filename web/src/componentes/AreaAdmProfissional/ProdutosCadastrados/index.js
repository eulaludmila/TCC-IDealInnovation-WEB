import React, {Component} from 'react';
import img from '../../../img/bolo.jpg'
import lupa from '../../../img/lupa.png'
import Header from '../Header'
import {ContainerAdm} from '../../../styles'

export class ProdutosCadastrados extends Component{
  render(){
    return (
       
        <ContainerAdm className="container conteudo-adm">
            <div class="card mb-3 mr-3 float-left" style={{maxWidth: '540px'}}>
                <div class="row no-gutters">
                    <div class="col-md-5">
                    <img src={img} title=""  style={{width: '100%',height:'210px'}} class="card-img" alt="gfg"/>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title titulo-produto-adm" >Bolo de Chocolate</h5>
                            <p class="card-text mb-5">Bolo de chocolate com cobertura de morango e alguns pedaços de uva.</p>
                            <div className="botao-centro">
                                <button className="btn btn-warning mr-2">Editar</button>
                                <button className="btn btn-secondary mr-2">Desativar</button>
                                <button className="btn btn-dark"><img src={lupa} alt="..."></img></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ContainerAdm>
			
    );
  }
}

export class BoxCadastroProdutos extends Component{
    render(){
      return (
         <div>
             <Header titulo="Seus Produtos"></Header>
            <ProdutosCadastrados></ProdutosCadastrados>
         </div>
          
              
      );
    }
  }

