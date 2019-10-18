import React, { Component } from 'react';
import { Header} from '../Conteudo/Home/componentes/Header';

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
