import React, {Component} from 'react';

export class SelectUfEditarEndereco extends Component{
    render(){
        return(
            <div className="form-group col-md-1">
                <label htmlFor="uf">UF:</label>
                <select id={this.props.id} onChange={this.props.onChange} class="form-control">
                    <option defaultValue>UF</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
        );
    }
}