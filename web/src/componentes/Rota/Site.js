import React, { Component } from 'react';
import { Header} from '../Conteudo/Home/componentes/Header';
import { Footer} from '../Conteudo/Footer';
import {Spinner} from 'react-bootstrap'

class Site extends Component {
  
  render(){
    
    return (
      <div>
        
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default Site;
