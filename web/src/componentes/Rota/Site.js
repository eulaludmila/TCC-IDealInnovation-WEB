import React, { Component } from 'react';
import { Header} from '../Conteudo/Home/componentes/Header';
import { Footer} from '../Conteudo/Footer';

class Site extends Component {
  
  render(){
    
    return (
      <div>
        
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Site;
