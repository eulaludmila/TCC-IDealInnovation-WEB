import React, { Component } from 'react';
import { ipAPI } from '../../../../../link_config';
import $ from 'jquery';

export default class SelectPesoQtd extends Component{

    constructor(props){
        super(props)

        this.state = {listaPesoQtd: [], multiplo: "", maximo: ""};
    }

    componentDidMount(){
        $.ajax({
            url: ipAPI + "produto/"+ this.props.codigo,
            dataType: "json",
            success: function(resposta){
                this.setState({multiplo: resposta.quantidade.multiplo});
                this.setState({maximo: resposta.quantidade.maximo});
                
            }.bind(this)
        })

        this.pegarQuantidade()
    }

    pegarQuantidade(){
        var min  = parseInt(this.state.multiplo);
        var max = parseInt(this.state.maximo);

        let qtde = [];
             
        if(this.props.label == "Kg:"){
            for(let i = min; i<= max; i++){
                qtde.push(i);
            }
        }else if(this.props.label == "Quantidade:"){
            for(let i = min; i<= max; i+= min){
                qtde.push(i);
            }
        }
        return qtde;
    }

    render(){
        return(
            <div className="form-group col-md-6">
                <label className="font_small">{this.props.label}</label>
                <select id={this.props.id} onChange={this.props.onChange} className="form-control">
                <option defaultValue>Escolha uma opção</option>

                    {this.pegarQuantidade().map(qtde=>
                        <option value={qtde}>{qtde}</option>    
                    )}

                    {/* for(int i = multiplo; i<=maximo; i=i+multiplo)

                        <option value={this.state.maximo}>{this.state.maximo} </option> */}
                    
                </select>
                <div className="form-group col-md-12 mt-2">
                    <p>Preço por Kg: R$</p>
                </div>
            </div>
        );
    }
}