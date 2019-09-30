import React, {Component} from 'react';


export class ImgAtualizar extends Component{
    render(){
        return(
            <div className="imagem_confeiteiro" id={this.props.id}  src={this.props.src}/>
        );
    }
}