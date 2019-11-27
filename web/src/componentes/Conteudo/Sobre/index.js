import React, {Component} from 'react'
import './sobre.css'
import img from '../../../img/bolo_frutas.jpg'
import TituloSobre from './Componentes/TituloSobre';
import TextoSobre from './Componentes/TextoSobre';


export default class Sobre extends Component{
    render(){
        return(
            <div className="container">
                <TituloSobre titulo="Sobre a Show de Bolos"/>
                <div className="form-row mt-5">
                    <TextoSobre texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.">
                    </TextoSobre>
                    <div className="form-group col-md-6">
                        <img className='img1-sobre' alt="la" style={{'width':'100%','height':'300px'}} src={img}></img>
                    </div>
                </div>
                <div className="form-row mt-5 mb-5">
                    <div className="form-group col-md-6 d-flex justify-content-center">
                        <img className='img-fluid' alt="la" style={{'width':'100%','height':'300px'}} src={img}></img>
                    </div>
                    <TextoSobre texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.">
                    </TextoSobre>
                </div>
            </div>
        )
    }
}

export class BoxSobre extends Component{
    render(){
        return(
            <div>
                <Sobre></Sobre>
            </div>
        )
    }
}