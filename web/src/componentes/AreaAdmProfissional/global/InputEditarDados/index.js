import React, {Component} from 'react';

export class InputEditarDados extends Component{
    render(){
        return(
            <div className={this.props.classe}>
                <label>{this.props.label}</label>
                <input type={this.props.tipo} className={this.props.classeInput} id={this.props.id} disabled={this.props.desabilitado} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}