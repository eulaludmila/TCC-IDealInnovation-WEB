import React, {Component} from 'react';
import { BotaoLoginCSS } from '../../../styles'

class BotaoLogin extends Component{

    render(){
        return(
            <div id={this.props.id} className="mt-5">
                <BotaoLoginCSS type={this.props.type} className="my-btn btn">{this.props.label}</BotaoLoginCSS>

                <span className="pure-form-message">Ainda não tem cadastro?</span>
                <span className="pure-form-message">Cadastre-se aqui!</span>
            </div>
        );
    };

}

export default BotaoLogin;