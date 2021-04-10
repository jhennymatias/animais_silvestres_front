/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Input from '../../components/Input'
import Logo from '../../img/logo.jpeg'

function Cadastro() {

    return (
        <div className="cadastro-container">
            <div className="cadastro-imagem"></div>
            <div className="cadastro-bemvindo">
                <div className="cadastro-bemvindo-top">
                    <div className="logo">
                        <img src={Logo} width="100px" />
                        <h1>Bem-vindo ao Achei</h1>
                    </div>

                    <p>Cadastro</p>
                </div>
                <div className="cadastro-bemvindo-input">
                    <div className="cadastro-bemvindo-inputs">
                        <Input label="Nome" id="nome" />
                        <Input label="Email" type="email" id="email" />
                        <Input label="Senha" type="password" id="password" />
                        <Input label="Confirmar Senha" type="password" id="verify_password" />
                    </div>

                    <div className="botton">
                        <button>Cadastrar</button>
                        <Link to="/">Logar</Link>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Cadastro;