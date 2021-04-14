/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import Input from '../../components/Input'
import Logo from '../../img/logo.jpeg'
import api from '../../services/api';


function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const history = useHistory();

    function handleVerifyPasswordEquals(e) {
        return (password === confirmedPassword ? true : false);
    }

    function handleCreateUser(e) {
        e.preventDefault();

        if (handleVerifyPasswordEquals()) {
            api.post('user', {
                name,
                email,
                password
            }).then(() => {
                alert('Registration completed');
                history.push('/');
            }).catch(() => {
                alert('Erro ao registrar');
            });
        } else {
            alert("Different passwords")
        }
    }

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
                <form onSubmit={handleCreateUser}>
                    <div className="cadastro-bemvindo-input">
                        <div className="cadastro-bemvindo-inputs">

                            <Input
                                label="Nome"
                                id="name"
                                required
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                            <Input
                                label="Email"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            <Input
                                label="Senha"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                            <Input
                                label="Confirmar Senha"
                                type="password"
                                id="verify_password"
                                value={confirmedPassword}
                                onChange={(e) => {
                                    setConfirmedPassword(e.target.value)
                                }} />

                        </div>

                        <div className="botton">
                            <button>Cadastrar</button>
                            <Link to="/">Logar</Link>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default Cadastro;