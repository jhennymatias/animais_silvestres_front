/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link} from 'react-router-dom';
import './styles.css';
import Input from '../../components/Input'
import Logo from '../../img/logo.jpeg'
function Home() {

    return (
        <div className="home-container">
            <div className="home-imagem">
                
            </div>
            <div className="home-bemvindo">
                    <div className="home-bemvindo-top">
                        <img src={Logo} width="100px"/>
                        <h1>Bem-vindo ao Achei</h1>
                        <p>Login</p>
                    </div>
                    <div className="home-bemvindo-input">
                        <div className="home-bemvindo-inputs">
                            <Input label="Email" type="email" id="Email"/>
                            <Input label="Password" type="password" id="Password"/>
                        </div>
                        
                        <button>Logar</button>
                        <Link to="/cadastro">Cadastrar</Link>
                    </div>
                </div>
                
        </div>
    );
}

export default Home;