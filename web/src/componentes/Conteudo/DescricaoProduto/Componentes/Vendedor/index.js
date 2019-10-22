import React, { Component } from 'react';
import { ipFotos } from '../../../../../link_config';

export default class Vendedor extends Component{
    render(){
        return(
            <div className="row m-3">
                <div className="card col borda">
                    <div className="card-body ">
                        <h5 className="card-title mb-3">Vendido e entregue por:</h5>
                        <img src={ ipFotos + this.props.fotoConfeiteiro} className="img_pessoa mr-2" alt={this.props.nomeConfeiteiro} title={this.props.nomeConfeiteiro}/>
                        <p className="card-text">{this.props.nomeConfeiteiro}</p>
                        <p className="card-text">Jandira-SP</p>
                        <span>Visitar o perfil</span>
                    </div>
                </div>
            </div>
        );
    }
}