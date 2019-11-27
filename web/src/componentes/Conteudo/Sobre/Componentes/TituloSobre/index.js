import React, {Component} from 'react'

export default class TituloSobre extends Component{
    render(){
        return(
            <div className="row mt-4">
                <div className="col-md-12">
                    <h1 className='h1 text-center'>{this.props.titulo}</h1>
                </div>
            </div>
        );
    }
}