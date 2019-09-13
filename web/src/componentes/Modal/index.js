import React, {Component} from 'react'
import imgCadastroRealizado from '../../img/correct.png';

export class ModalCadastro extends Component{

    render(){
        return(
            <div>
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button> */}
              
                <div className="modal fade bd-example-modal-sm" id="my-modal" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content bg-light">
                            <div className="modal-header">
                                <h5 className="modal-title">Cadastro Realizado</h5><img src={imgCadastroRealizado} alt={this.props.alt} title={this.props.title}></img>
                                {/* <button type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-modal btn-success" data-dismiss="modal">Ok</button>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }


}