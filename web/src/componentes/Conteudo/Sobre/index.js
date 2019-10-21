import React, {Component} from 'react'
import './sobre.css'
import img from '../../../img/bolo.jpg'
import {Footer} from '../Footer'
export class Sobre extends Component{
    render(){
        return(
            <div className="container caixa-sobre center">
                <h1 className='titulo-sobre'>Sobre a Show de Bolos</h1>
                <div className="primeiro-texto center">
                    <div className="parte1">
                        <div className='texto1 '>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                         
                        </div>
                        <div className='img1 '>
                            <img className='img1-sobre' style={{'width':'100%','height':'300px'}} src={img}></img>
                        </div>
                    </div>
                    <div className="parte2">
                        <div className='img1 '>
                            <img className='img1-sobre' style={{'width':'100%','height':'300px'}} src={img}></img>
                        </div>
                        <div className='texto1 '>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.

                        </div>
                        
                    </div>
                
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
                <Footer></Footer>
            </div>
        )
    }
}