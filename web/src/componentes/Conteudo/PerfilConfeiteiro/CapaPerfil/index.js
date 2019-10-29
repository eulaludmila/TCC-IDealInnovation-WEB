import React, { Component } from 'react';

export default class CapaPerfil extends Component{
    render(){
        return(
            <div className="container-fluid p-0">
                <div className="container col-md-12 p-0">
                    <img src={this.props.src} className="img-fluid capa" alt={this.props.alt} title={this.props.title}/>
                </div>
            </div>
        );
    }
}