import React, {Component} from 'react';
import img from '../../../img/bolo.jpg'
import Header from '../Header'
import {ContainerAdm} from '../../../styles'

export class HomeProfissional extends Component{
  render(){
    return (
       
        <ContainerAdm className="container conteudo-adm">
          <div className="card text-center float-left mb-5" style={{width: '15rem'}}>
            <img className="card-img-top imagens-bolos" src={img} alt="Imagem de capa do card"/>
            <div className="card-body">
              <h5 className="card-title nome-bolo-adm">Bolo de Chocolate</h5>
              <p className="card-text">R$40,90</p>
              <div className="avaliacao">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label htmlFor="star5" title="5 entrelas">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label htmlFor="star4" title="4 entrelas">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label htmlFor="star3" title="3 entrelas">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label htmlFor="star2" title="2 entrelas">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label htmlFor="star1" title="1 entrela">1 star</label>
                </div>
              </div>
            </div>
          </div>
        </ContainerAdm>
			
    );
  }
}

export class BoxHomeProfissional extends Component{
  render(){
    return (
       
        <div>
          <Header titulo="Área Administrativa"></Header>
          <HomeProfissional></HomeProfissional>
        </div>
			
    );
  }
}

