import React, {Component} from 'react';
import $ from 'jquery';
import { ipAPI } from '../../../../link_config';

//CLASSE SELECT FEMININO OU MASCULINO
class SelectCategorias extends Component{

    constructor(props){

        super(props);

        this.state = {listaCategorias: []};
    }

    componentDidMount(){
        $.ajax({
            url: ipAPI + "categoria",
            dataType: "json",
            success: function(resposta){
                
                this.setState({listaCategorias: resposta});
                console.log(resposta);
            }.bind(this)
        })
    }
        


    atualizarListagemCategorias(novaLista){
        this.setState({listaCategorias: novaLista});
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="categoria">Categoria</label>
                <select id={this.props.id}  onChange={this.props.onChange} className="form-control">
                    <option value=""> Selecione uma categoria...</option>
                    {this.state.listaCategorias.map(categorias =>
                        <option key={categorias.codCategoria} value={categorias.codCategoria}>{categorias.categoria}   ({categorias.tipoUnidade})</option>
                        
                    )}
                </select>
            </div>
        )
    }
}

export default SelectCategorias;