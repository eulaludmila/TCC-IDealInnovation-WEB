import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component{

    render(){
        return(

            <div>
                
                <Link to="/entrar"><p>Entrar</p></Link>
                <Link to="/cadastrar"><p>Cadastre-se</p></Link>
            </div>

        );
    }

}

export default Home;